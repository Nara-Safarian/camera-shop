import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { APIRoute, NameSpace, PROMOCODES } from '../consts';
import { Banner } from '../types/banner';
import { addReviewToStart, clearBasket, setAllReviews, setBanner, setCurrentProduct, setProductCards, setSimilarProducts } from './actions';
import { Product } from '../types/product';
import { Review } from '../types/reviews';

export const fetchBannerAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Banner}/fetchBanner`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Banner>(APIRoute.Banner);

    dispatch(setBanner(data));
  },
);

export const fetchAllProductsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetchAllProducts`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Product[]>(APIRoute.Products, {params: {
      _embed: 'reviews'
    }});

    dispatch(setProductCards(data));
  },
);

export const fetchCurrentProductAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetchCurrentProduct`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Product>(`${APIRoute.Products}/${id}`, {params: {
      _embed: 'reviews'
    }});
    dispatch(setCurrentProduct(data));
  },
);

export const fetchSimilarProductsAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Products}/fetchSimilarProducts`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Product[]>(`${APIRoute.Products}/${id}${APIRoute.Similar}`);
    dispatch(setSimilarProducts(data));
  },
);

export const fetchAllReviewsById = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/fetchAllReviews`,
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Products}/${id}${APIRoute.Reviews}`);
    dispatch(setAllReviews(data));
  },
);

export const postReviewForCamera = createAsyncThunk<void, {
  cameraId: number;
  rating: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/postReviewForCamera`,
  async (formData, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Reviews, formData);
    dispatch(addReviewToStart(data));
  },
);

export const createOrder = createAsyncThunk<void, {
  camerasIds: number[];
  coupon: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/postReviewForCamera`,
  async ({camerasIds, coupon}, {dispatch, extra: api}) => {
    await api.post<void>(APIRoute.Orders, {
      camerasIds,
      // backend very strange. It doesn't accept empty coupon. That is why I am using first promocode
      coupon: Object.keys(PROMOCODES).includes(coupon) ? coupon : 'camera-333'
    });
    dispatch(clearBasket());
  },
);

