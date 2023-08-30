import { Product } from './product';

export type Basket = Array<{
  product: Product;
  amount: number;
}>;
