import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { APIRoute, NameSpace } from '../consts';
import { Banner } from '../types/banner';
import { setBanner, setProductCards } from './actions';
import { Product } from '../types/product';

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
    const {data} = await api.get<Product[]>(APIRoute.Products);

    dispatch(setProductCards(data));
  },
);
