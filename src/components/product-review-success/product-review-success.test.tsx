import { render, screen } from '@testing-library/react';
import ProductReviewSuccess from './product-review-success';

test('ProductReviewSuccess should be rendered correctly', () => {
  render(
    <ProductReviewSuccess isActive onClose={function (): void {
      // nothing
    } }
    />
  );
  expect(screen.getByText('Спасибо за отзыв')).toBeInTheDocument();
});
