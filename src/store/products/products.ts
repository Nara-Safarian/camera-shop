import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { Products } from '../../types/state';
import { setProductCards } from '../actions';

const initialState: Products = {
  allProducts: [],
};


export const products = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setProductCards, (state, action) => {
        state.allProducts = action.payload;
      });
  }
}
);
