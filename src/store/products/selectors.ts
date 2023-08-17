import { NameSpace } from '../../consts';
import { Product } from '../../types/product';
import { Filter, Sorting, State } from '../../types/state';

export const getAllProducts = (state: State): Product[] => state[NameSpace.Products].allProducts;
export const getSearchProducts = (state: State): Product[] => state[NameSpace.Products].searchProducts;
export const getSorting = (state: State): Sorting => state[NameSpace.Products].sorting;
export const getFilter = (state: State): Filter => state[NameSpace.Products].filter;
export const isAllProductsLoading = (state: State): boolean => state[NameSpace.Products].isAllProductsLoading;
