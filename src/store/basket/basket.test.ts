import { Product } from '../../types/product';
import { addProductToBasket, clearBasket, clearOrderState, decreaseProductFromBasket, removeProductFromBasket, setPromocode, updateProductAmount } from '../actions';
import { initialState } from './basket';
import { basket } from './basket';

const product = {
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

test('Reducer banner: without additional parameters should return initial state', () => {
  expect(basket.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual({...initialState});
});

test('Reducer banner: should addProductToBasket', () => {
  expect(basket.reducer({...initialState, basket: [{product, amount: 50}]}, addProductToBasket(product))).toEqual({...initialState, basket: [{product, amount: 51}]});
});

test('Reducer banner: should decreaseProductFromBasket', () => {
  expect(basket.reducer({...initialState, basket: [{product, amount: 50}]}, decreaseProductFromBasket(product))).toEqual({...initialState, basket: [{product, amount: 49}]});
});


test('Reducer banner: should updateProductAmount', () => {
  expect(basket.reducer({...initialState, basket: [{product, amount: 50}]}, updateProductAmount({product, amount: 99}))).toEqual({...initialState, basket: [{product, amount: 99}]});
});

test('Reducer banner: should removeProductFromBasket', () => {
  expect(basket.reducer({...initialState, basket: [{product, amount: 50}]}, removeProductFromBasket(product))).toEqual({...initialState});
});

test('Reducer banner: should clearBasket', () => {
  expect(basket.reducer({...initialState, basket: [{product, amount: 50}]}, clearBasket())).toEqual({...initialState});
});


test('Reducer banner: should setPromocode', () => {
  expect(basket.reducer(void 0, setPromocode('test'))).toEqual({...initialState, promocode: 'test'});
});

test('Reducer banner: should clearOrderState', () => {
  expect(basket.reducer({...initialState, orderCreated: true, orderRejected: true}, clearOrderState())).toEqual({...initialState});
});
