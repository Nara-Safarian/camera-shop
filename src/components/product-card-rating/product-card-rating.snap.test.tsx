import { render } from '@testing-library/react';
import ProductCardRating from './product-card-rating';

const REVIEWS = [{
  'id': '9309e98a-11e5-4b7c-a6d2-73b1d8e2f0bf',
  'userName': 'Дарья',
  'advantage': 'Цена соответствует качеству.',
  'disadvantage': 'Без объектива',
  'review': 'Это моя первая камера. Я в восторге, нареканий нет',
  'rating': 4,
  'createAt': '2023-03-28T11:52:11.598Z',
  'cameraId': 1
},
{
  'id': '6b4ce4f7-efd0-4798-985c-a357fab7ec79',
  'userName': 'Артём',
  'advantage': 'Недорогая, за такую цену отличный вариант.',
  'disadvantage': 'Трудно найти чехол. Заводские крайне дррогие',
  'review': 'Это моя первая камера. Я в восторге, нареканий нет',
  'rating': 2,
  'createAt': '2023-03-07T11:52:11.601Z',
  'cameraId': 1
}];

const RATING = 10;

test('ProductCardRating snapshot should be rendered correctly without reviews', () => {
  const {container} = render(
    <ProductCardRating reviewCount={RATING} />
  );
  expect(container).toMatchSnapshot();
});


test('ProductCardRating snapshot should be rendered correctly with reviews', () => {
  const {container} = render(
    <ProductCardRating reviewCount={RATING} reviews={REVIEWS} />
  );
  expect(container).toMatchSnapshot();
});
