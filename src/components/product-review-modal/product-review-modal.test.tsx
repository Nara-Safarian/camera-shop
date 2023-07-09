import { render, screen } from '@testing-library/react';
import ProductReviewModal from './product-review-modal';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

test('ProductReviewModal should be rendered correctly', () => {
  render(
    <Provider store={mockStore({})}>
      <ProductReviewModal isActive onClose={function (): void {
      // nothing
      } } onSubmit={function (): void {
      // nothing
      } } cameraId='1'
      />
    </Provider>
  );
  expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();
  expect(screen.getByText('Комментарий')).toBeInTheDocument();
  expect(screen.getByText('Отправить отзыв')).toBeInTheDocument();
});
