import { store } from '../store';
import { Banner } from './banner';
import { Product } from './product';
import { Review } from './reviews';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Products = {
  allProducts: Product[];
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
