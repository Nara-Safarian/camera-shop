import { render, screen } from '@testing-library/react';
import CatalogAddItemSuccess from './catalog-add-item-success';

test('CatalogAddItemSuccess should be rendered correctly', () => {
  render(
    <CatalogAddItemSuccess isActive={false} onClose={function (): void {
      // nothing
    } }
    />
  );
  expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
  expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
});
