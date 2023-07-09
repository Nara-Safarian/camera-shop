import { addReviewToStart, setAllReviews } from '../actions';
import { reviews } from './reviews';

const review = {
  'id': '13fd5b97-6dd1-4d41-88d0-af71b0047f9c',
  'userName': 'Александр',
  'advantage': 'Недорогая, за такую цену отличный вариант.',
  'disadvantage': 'Не рекомендую!',
  'review': 'Хорошая камера. Лучше за эти деньги не найти.',
  'rating': 3,
  'createAt': '2023-02-24T11:52:11.601Z',
  'cameraId': 1
};

const allReviews = [
  {
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
  },
];

test('Reducer reviews: without additional parameters should return initial state', () => {
  expect(reviews.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual({allReviews: []});
});

test('Reducer reviews: should setAllReviews', () => {
  expect(reviews.reducer(void 0, setAllReviews(allReviews))).toEqual({allReviews});
});

test('Reducer reviews: should addReviewToStart', () => {
  expect(reviews.reducer({
    allReviews
  }, addReviewToStart(review))).toEqual({allReviews: [
    review,
    ...allReviews
  ]});
});
