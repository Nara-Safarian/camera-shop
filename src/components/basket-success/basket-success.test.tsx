import { render, screen } from '@testing-library/react';
import BasketSuccess from './basket-success';
import { BrowserRouter } from 'react-router-dom';

test('BasketSuccess should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <BasketSuccess onClose={function (): void {
        throw new Error('Function not implemented.');
      } } isActive={false}
      />
    </BrowserRouter>
  );
  expect(screen.getByText('Спасибо за покупку')).toBeInTheDocument();
});
