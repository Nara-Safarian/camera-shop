import { createAction } from '@reduxjs/toolkit';
import { Banner } from '../types/banner';
import { NameSpace } from '../consts';
import { Product } from '../types/product';
import { Review } from '../types/reviews';
import { Filter, Sorting } from '../types/state';

export const setBanner = createAction<Banner>(`${NameSpace.Banner}/setBanner`);

export const setProductCards = createAction<Product[]>(`${NameSpace.Products}/setProductCards`);
export const setCurrentProduct = createAction<Product>(`${NameSpace.Products}/setCurrentProduct`);
export const setSimilarProducts = createAction<Product[]>(`${NameSpace.Products}/setSimilarProducts`);
export const setAllReviews = createAction<Review[]>(`${NameSpace.Reviews}/setAllReviews`);
export const addReviewToStart = createAction<Review>(`${NameSpace.Reviews}/addReviewToStart`);
export const searchCards = createAction<string>(`${NameSpace.Products}/searchCards`);
export const filterAndSortCards = createAction<{filter?: Partial<Filter>; sorting?: Partial<Sorting>}>(`${NameSpace.Products}/filterAndSortCards`);

export const addProductToBasket = createAction<Product>(`${NameSpace.Basket}/addProductToBasket`);
export const decreaseProductFromBasket = createAction<Product>(`${NameSpace.Basket}/decreaseProductFromBasket`);
export const updateProductAmount = createAction<{product: Product; amount: number}>(`${NameSpace.Basket}/updateProductAmount`);
export const removeProductFromBasket = createAction<Product>(`${NameSpace.Basket}/removeProductFromBasket`);
export const clearBasket = createAction<void>(`${NameSpace.Basket}/clearBasket`);
export const setPromocode = createAction<string>(`${NameSpace.Basket}/setPromocode`);
export const clearOrderState = createAction<void>(`${NameSpace.Basket}/clearOrderState`);
