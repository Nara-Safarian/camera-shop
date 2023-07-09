import { render } from '@testing-library/react';
import ProductReviewCard from './product-review-card';

const review = {
  id: '1',
  createAt: 'Sat, 08 Jul 2023 11:58:27 GMT',
  cameraId: 1,
  userName: 'Test',
  advantage: 'Super',
  disadvantage: 'Not super',
  review: 'Cool thing. I suggest',
  rating: 4
};

test('ProductReviewCard snapshot should be rendered correctly', () => {
  const {container} = render(
    <ProductReviewCard review={review} />
  );
  expect(container).toMatchSnapshot();
});
