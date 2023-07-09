import { render } from '@testing-library/react';
import ProductReviewSuccess from './product-review-success';

test('ProductReviewSuccess snapshot should be rendered correctly', () => {
  const {container} = render(
    <ProductReviewSuccess isActive onClose={function (): void {
      // nothing
    } }
    />
  );
  expect(container).toMatchSnapshot();
});
