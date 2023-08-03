import { ProductCategory, ProductLevel, ProductType } from '../enums';
import { Review } from './reviews';

export type Product = {
  'id': number;
  'price': number;
  'reviewCount': number;
  'name': string;
  'vendorCode': string;
  'type': ProductType;
  'category': ProductCategory;
  'description': string;
  'previewImg': string;
  'level': ProductLevel;
  'previewImg2x': string;
  'previewImgWebp': string;
  'previewImgWebp2x': string;
  'reviews'?: Review[];
};
