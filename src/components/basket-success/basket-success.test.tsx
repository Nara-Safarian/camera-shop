import { render, screen } from '@testing-library/react';
import BasketSuccess from './basket-success';

test('BasketSuccess should be rendered correctly', () => {
  render(
    <BasketSuccess />
  );
  expect(screen.getByText('Спасибо за покупку')).toBeInTheDocument();
});
