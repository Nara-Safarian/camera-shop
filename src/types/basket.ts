import { ProductCategory, ProductLevel, ProductType } from '../enums';

export type Basket = {
  'id': number;
  'price': number;
  'name': string;
  'vendorCode': string;
  'type': ProductType;
  'category': ProductCategory;
  'previewImg': string;
  'level': ProductLevel;
  'previewImg2x': string;
  'previewImgWebp': string;
  'previewImgWebp2x': string;
};
