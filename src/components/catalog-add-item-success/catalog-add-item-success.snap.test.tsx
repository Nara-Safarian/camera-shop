import { render } from '@testing-library/react';
import CatalogAddItemSuccess from './catalog-add-item-success';
import { BrowserRouter } from 'react-router-dom';

test('CatalogAddItemSuccess snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <CatalogAddItemSuccess isActive={false} onClose={function (): void {
        // nothing
      } }
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
