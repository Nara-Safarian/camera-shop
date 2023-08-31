import { render } from '@testing-library/react';
import BasketAddItemModal from './basket-add-item-modal';

test('ChangeMe snapshot should be rendered correctly', () => {
  const {container} = render(
    <BasketAddItemModal isActive={false} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } onAddProduct={function (id: number): void {
      throw new Error('Function not implemented.');
    } }
    />
  );
  expect(container).toMatchSnapshot();
});
