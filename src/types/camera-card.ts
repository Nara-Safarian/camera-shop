import { Review } from './reviews';

export type CameraCard = {
  'id': number;
  'price': number;
  'reviewCount': number;
  'name': string;
  'previewImg': string;
  'previewImg2x': string;
  'previewImgWebp': string;
  'previewImgWebp2x': string;
  'reviews'?: Review[]
};
