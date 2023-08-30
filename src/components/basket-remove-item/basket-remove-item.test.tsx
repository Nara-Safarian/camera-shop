import { render, screen } from '@testing-library/react';
import BasketRemoveItem from './basket-remove-item';

test('BasketRemoveItem should be rendered correctly', () => {
  render(
    <BasketRemoveItem onClose={function (): void {
      throw new Error('Function not implemented.');
    } } onRemove={function (): void {
      throw new Error('Function not implemented.');
    } } isActive={false}
    />
  );
  expect(screen.getByText('Удалить этот товар?')).toBeInTheDocument();
  expect(screen.getByText('Удалить')).toBeInTheDocument();
});
