import { Basket } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { addProductToBasket, clearBasket, clearOrderState, decreaseProductFromBasket, removeProductFromBasket, setPromocode, updateProductAmount } from '../actions';
import { createOrder } from '../api-actions';

export const initialState: Basket = {
  basket: [],
  promocode: '',
  orderCreated: false,
  orderRejected: false,
};

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 99;

export const basket = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProductToBasket, (state, action) => {
        const existingProductIndex = state.basket.findIndex(({ product }) => product.id === action.payload.id);

        if (existingProductIndex === -1) {
          state.basket = [
            ...state.basket,
            {
              product: action.payload,
              amount: 1,
            },
          ];
        } else {
          const updatedBasket = state.basket.map((basketItem, index) => {
            if (index === existingProductIndex) {
              const newAmount = basketItem.amount + 1;
              return { ...basketItem, amount: newAmount > MAX_AMOUNT ? MAX_AMOUNT : newAmount };
            }
            return basketItem;
          });

          state.basket = updatedBasket;
        }
      })
      .addCase(decreaseProductFromBasket, (state, action) => {
        const existingProductIndex = state.basket.findIndex(({ product }) => product.id === action.payload.id);

        if (existingProductIndex === -1) {
          return;
        }

        const updatedBasket = state.basket.map((basketItem, index) => {
          if (index === existingProductIndex) {
            const newAmount = basketItem.amount - 1;
            return { ...basketItem, amount: newAmount < MIN_AMOUNT ? MIN_AMOUNT : newAmount };
          }
          return basketItem;
        });

        state.basket = updatedBasket;
      })
      .addCase(updateProductAmount, (state, action) => {
        const {product, amount} = action.payload;
        const existingProductIndex = state.basket.findIndex(({ product: p }) => p.id === product.id);

        if (existingProductIndex === -1) {
          return;
        }
        let newAmount = amount;

        if (newAmount > MAX_AMOUNT) {
          newAmount = MAX_AMOUNT;
        } else if (newAmount < MIN_AMOUNT) {
          newAmount = MIN_AMOUNT;
        }

        const updatedBasket = state.basket.map((basketItem, index) => index === existingProductIndex ? { ...basketItem, amount: newAmount} : basketItem);

        state.basket = updatedBasket;
      })
      .addCase(removeProductFromBasket, (state, action) => {
        state.basket = state.basket.filter(({product}) => product.id !== action.payload.id);
      })
      .addCase(clearBasket, (state) => {
        state.basket = [];
        state.promocode = '';
      })
      .addCase(setPromocode, (state, action) => {
        state.promocode = action.payload;
      })
      .addCase(clearOrderState, (state) => {
        state.orderCreated = false;
        state.orderRejected = false;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.orderCreated = true;
      })
      .addCase(createOrder.rejected, (state) => {
        state.orderRejected = true;
      });
  }
}
);
