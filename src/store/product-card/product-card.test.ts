import { Product } from '../../types/product';
import { setCurrentProduct, setSimilarProducts } from '../actions';
import { productCard } from './product-card';

const currentProduct = {
  'id': 5,
  'name': 'Van Shot',
  'vendorCode': 'YU7RT5GH76',
  'type': 'Коллекционная',
  'category': 'Видеокамера',
  'description': 'Крайне редкое наименование не потеряло актуальность не смотря на сможество альтернатив. После съёмок на данную камеру фильм не стыдно показать в рамках кинофестиваля. Первые 4К настройки, высочайшее разрешение, уникальная цветопередача.',
  'previewImg': 'img/content/van-shot.jpg',
  'level': 'Профессиональный',
  'price': 149990,
  'previewImg2x': 'img/content/van-shot@2x.jpg',
  'previewImgWebp': 'img/content/van-shot.webp',
  'previewImgWebp2x': 'img/content/van-shot@2x.webp',
  'reviewCount': 39
} as Product;

const similarProducts = [
  {
    'id': 5,
    'name': 'Van Shot',
    'vendorCode': 'YU7RT5GH76',
    'type': 'Коллекционная',
    'category': 'Видеокамера',
    'description': 'Крайне редкое наименование не потеряло актуальность не смотря на сможество альтернатив. После съёмок на данную камеру фильм не стыдно показать в рамках кинофестиваля. Первые 4К настройки, высочайшее разрешение, уникальная цветопередача.',
    'previewImg': 'img/content/van-shot.jpg',
    'level': 'Профессиональный',
    'price': 149990,
    'previewImg2x': 'img/content/van-shot@2x.jpg',
    'previewImgWebp': 'img/content/van-shot.webp',
    'previewImgWebp2x': 'img/content/van-shot@2x.webp',
    'reviewCount': 39
  },
  {
    'id': 11,
    'name': 'SP 520',
    'vendorCode': 'JQ756',
    'type': 'Коллекционная',
    'category': 'Видеокамера',
    'description': 'Делайте лучшие фильмы в высоком разрешении. Лёгкая в управлении, мощная начинка, реалистичная цветопередача, возможность просмотра отснятого материала через поворотный ЖК-экран и передача видео через систему Bluetooth.',
    'previewImg': 'img/content/sp-520.jpg',
    'level': 'Профессиональный',
    'price': 105590,
    'previewImg2x': 'img/content/sp-520@2x.jpg',
    'previewImgWebp': 'img/content/sp-520.webp',
    'previewImgWebp2x': 'img/content/sp-520@2x.webp',
    'reviewCount': 17
  },
  {
    'id': 33,
    'name': 'Amazing Go',
    'vendorCode': 'AD345J',
    'type': 'Коллекционная',
    'category': 'Видеокамера',
    'description': 'Прикрепить камеру на шлем, сделать множество крутых видео под водой или записать свой полёт на тарзанке - благодаря усовершенствованной камере семейства Go ваши приключения останутся навсегда в памяти.',
    'previewImg': 'img/content/amazing-go.jpg',
    'level': 'Профессиональный',
    'price': 79000,
    'previewImg2x': 'img/content/amazing-go@2x.jpg',
    'previewImgWebp': 'img/content/amazing-go.webp',
    'previewImgWebp2x': 'img/content/amazing-go@2x.webp',
    'reviewCount': 22
  }
] as Product[];

test('Reducer product-card: without additional parameters should return initial state', () => {
  expect(productCard.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual({currentProduct: null, similarProducts: []});
});


test('Reducer product-card: should setCurrentProduct', () => {
  expect(productCard.reducer(void 0, setCurrentProduct(currentProduct))).toEqual({currentProduct, similarProducts: []});
});

test('Reducer product-card: should setSimilarProducts', () => {
  expect(productCard.reducer(void 0, setSimilarProducts(similarProducts))).toEqual({currentProduct: null, similarProducts});
});
