import { setBanner } from '../actions';
import { banner } from './banner';

const bannerFromServer = {
  'id': 7,
  'name': 'Look 54',
  'previewImg': 'img/content/promo.jpg',
  'previewImg2x': 'img/content/promo@2x.jpg',
  'previewImgWebp': 'img/content/promo.webp',
  'previewImgWebp2x': 'img/content/promo@2x.webp'
};

test('Reducer banner: without additional parameters should return initial state', () => {
  expect(banner.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual({banner: null});
});


test('Reducer banner: should setBanner', () => {
  expect(banner.reducer(void 0, setBanner(bannerFromServer))).toEqual({banner: bannerFromServer});
});
