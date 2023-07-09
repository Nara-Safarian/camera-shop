import { render, screen } from '@testing-library/react';
import BasketRemoveItem from './basket-remove-item';

test('BasketRemoveItem should be rendered correctly', () => {
  render(
    <BasketRemoveItem />
  );
  expect(screen.getByText('Удалить этот товар?')).toBeInTheDocument();
  expect(screen.getByText('Удалить')).toBeInTheDocument();
});
