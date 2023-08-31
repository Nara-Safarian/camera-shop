import { render, screen } from '@testing-library/react';
import BasketAddItemModal from './basket-add-item-modal';

test('ChangeMe should be rendered correctly', () => {
  render(
    <BasketAddItemModal isActive={false} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } onAddProduct={function (id: number): void {
      throw new Error('Function not implemented.');
    } }
    />
  );
  expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
  expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
});
