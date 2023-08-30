import { render } from '@testing-library/react';
import BasketRemoveItem from './basket-remove-item';

test('BasketRemoveItem snapshot should be rendered correctly', () => {
  const {container} = render(
    <BasketRemoveItem onClose={function (): void {
      throw new Error('Function not implemented.');
    } } onRemove={function (): void {
      throw new Error('Function not implemented.');
    } } isActive={false}
    />
  );
  expect(container).toMatchSnapshot();
});
