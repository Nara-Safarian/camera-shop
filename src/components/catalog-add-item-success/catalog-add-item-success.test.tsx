import { render, screen } from '@testing-library/react';
import CatalogAddItemSuccess from './catalog-add-item-success';
import { BrowserRouter } from 'react-router-dom';

test('CatalogAddItemSuccess should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <CatalogAddItemSuccess isActive={false} onClose={function (): void {
        // nothing
      } }
      />
    </BrowserRouter>
  );
  expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
  expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
});
