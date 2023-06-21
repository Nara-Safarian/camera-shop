import { createAction } from '@reduxjs/toolkit';
import { Banner } from '../types/banner';
import { NameSpace } from '../consts';
import { Product } from '../types/product';

export const setBanner = createAction<Banner>(`${NameSpace.Banner}/setBanner`);
export const setProductCards = createAction<Product[]>(`${NameSpace.Products}/setProductCards`);

