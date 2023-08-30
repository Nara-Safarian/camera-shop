export enum AppRoute {
  Catalog = '/',
  Product = '/cameras/:id',
  Basket = '/orders'
}


export enum NameSpace {
  Products = 'PRODUCTS',
  Banner = 'BANNER',
  ProductCard = 'PRODUCT_CARD',
  Reviews = 'REVIEWS',
  Basket = 'BASKET',
}

export enum APIRoute {
  Banner = '/promo',
  Products = '/cameras',
  Reviews = '/reviews',
  Similar = '/similar',
  Orders = '/orders'
}

export const PROMOCODES: Record<string, number> = {
  'camera-333': 333,
  'camera-444': 444,
  'camera-555': 555,
};
