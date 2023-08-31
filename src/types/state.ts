import { ProductCategory, ProductLevel, ProductType } from '../enums';
import { store } from '../store';
import { Banner } from './banner';
import { Product } from './product';
import { Basket as BasketType } from './basket';
import { Review } from './reviews';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export enum SortBy {
  None = 'none',
  Rating = 'rating',
  Price = 'price'
}

export enum SortOrder {
  None = 'none',
  Asc = 'asc',
  Desc = 'desc'
}

export type Sorting = {
  by: SortBy;
  order: SortOrder;
};

export type Filter = {
  category?: ProductCategory;
  level?: Array<ProductLevel>;
  type?: Array<ProductType>;
  minPrice?: number;
  maxPrice?: number;
  minPricePlaceholder?: number;
  maxPricePlaceholder?: number;
};

export type Products = {
  isAllProductsLoading: boolean;
  allProducts: Product[];
  searchProducts: Product[];
  originalProducts: Product[];
  sorting: Sorting;
  filter: Filter;
}

export type Banners = {
  banner: Banner | null;
}

export type ProductCard = {
  currentProduct: Product | null;
  similarProducts: Product[];
}

export type Reviews = {
  allReviews: Review[];
}

export type Basket = {
  basket: BasketType;
  promocode: string;
  orderCreated: boolean;
  orderRejected: boolean;
}
