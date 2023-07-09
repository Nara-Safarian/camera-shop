import { render } from '@testing-library/react';
import BasketRemoveItem from './basket-remove-item';

test('BasketRemoveItem snapshot should be rendered correctly', () => {
  const {container} = render(
    <BasketRemoveItem />
  );
  expect(container).toMatchSnapshot();
});
