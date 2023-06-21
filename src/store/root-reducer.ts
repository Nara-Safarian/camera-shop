import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { products } from './products/products';
import { banner } from './banner/banner';

export const rootReducer = combineReducers({
  [NameSpace.Products]: products.reducer,
  [NameSpace.Banner]: banner.reducer,
});
