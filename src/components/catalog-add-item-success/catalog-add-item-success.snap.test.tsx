import { render } from '@testing-library/react';
import CatalogAddItemSuccess from './catalog-add-item-success';

test('CatalogAddItemSuccess snapshot should be rendered correctly', () => {
  const {container} = render(
    <CatalogAddItemSuccess isActive={false} onClose={function (): void {
      // nothing
    } }
    />
  );
  expect(container).toMatchSnapshot();
});
