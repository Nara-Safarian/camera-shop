import { render } from '@testing-library/react';
import ProductReviewModal from './product-review-modal';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

test('ProductReviewModal snapshot should be rendered correctly', () => {
  const {container} = render(
    <Provider store={mockStore({})}>
      <ProductReviewModal isActive onClose={function (): void {
        // nothing
      } } onSubmit={function (): void {
        // nothing
      } } cameraId='1'
      />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
