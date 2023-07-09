import { render } from '@testing-library/react';
import MainCatalogFilters from './main-catalog-filters';

test('MainCatalogFilters snapshot should be rendered correctly', () => {
  const {container} = render(
    <MainCatalogFilters />
  );
  expect(container).toMatchSnapshot();
});
