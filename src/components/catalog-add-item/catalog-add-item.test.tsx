import { render, screen } from '@testing-library/react';
import CatalogAddItem from './catalog-add-item';

test('CatalogAddItem should be rendered correctly', () => {
  render(
    <CatalogAddItem />
  );
  expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
  expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
});
