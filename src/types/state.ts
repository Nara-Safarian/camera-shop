import { store } from '../store';
import { Banner } from './banner';
import { Product } from './product';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Products = {
  allProducts: Product[];
}

export type Banners = {
  banner: Banner | null;
}
