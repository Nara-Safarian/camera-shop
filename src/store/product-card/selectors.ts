import { NameSpace } from '../../consts';
import { Product } from '../../types/product';
import { State } from '../../types/state';

export const getCurrentProduct = (state: State): Product | null => state[NameSpace.ProductCard].currentProduct;
export const getSimilarProducts = (state: State): Product[] => state[NameSpace.ProductCard].similarProducts;
