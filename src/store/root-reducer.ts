import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { products } from './products/products';
import { banner } from './banner/banner';
import { productCard } from './product-card/product-card';
import { reviews } from './reviews/reviews';
import { basket } from './basket/basket';

export const rootReducer = combineReducers({
  [NameSpace.Products]: products.reducer,
  [NameSpace.Banner]: banner.reducer,
  [NameSpace.ProductCard]: productCard.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.Basket]: basket.reducer,
});
