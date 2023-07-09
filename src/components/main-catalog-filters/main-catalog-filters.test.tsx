import { render, screen } from '@testing-library/react';
import MainCatalogFilters from './main-catalog-filters';

test('MainCatalogFilters should be rendered correctly', () => {
  render(
    <MainCatalogFilters />
  );
  expect(screen.getByText('Категория')).toBeInTheDocument();
  expect(screen.getByText('Тип камеры')).toBeInTheDocument();
  expect(screen.getByText('Уровень')).toBeInTheDocument();
  expect(screen.getByText('Сбросить фильтры')).toBeInTheDocument();
});
