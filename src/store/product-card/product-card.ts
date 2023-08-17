import { ProductCard } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { setCurrentProduct, setSimilarProducts } from '../actions';

export const initialState: ProductCard = {
  currentProduct: null,
  similarProducts: [],
};

export const productCard = createSlice({
  name: NameSpace.ProductCard,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setCurrentProduct, (state, action) => {
        state.currentProduct = action.payload;
      })
      .addCase(setSimilarProducts, (state, action) => {
        state.similarProducts = action.payload;
      });
  }
}
);
