import { NameSpace } from '../../consts';
import { Product } from '../../types/product';
import { State } from '../../types/state';

export const getAllProducts = (state: State): Product[] => state[NameSpace.Products].allProducts;
