import { render } from '@testing-library/react';
import CatalogAddItem from './catalog-add-item';

test('CatalogAddItem snapshot should be rendered correctly', () => {
  const {container} = render(
    <CatalogAddItem />
  );
  expect(container).toMatchSnapshot();
});
