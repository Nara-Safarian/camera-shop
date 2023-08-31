import { render } from '@testing-library/react';
import BasketSuccess from './basket-success';
import { BrowserRouter } from 'react-router-dom';

test('BasketSuccess snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <BasketSuccess onClose={function (): void {
        throw new Error('Function not implemented.');
      } } isActive={false}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
