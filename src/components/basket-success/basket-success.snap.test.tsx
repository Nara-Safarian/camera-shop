import { render } from '@testing-library/react';
import BasketSuccess from './basket-success';

test('BasketSuccess snapshot should be rendered correctly', () => {
  const {container} = render(
    <BasketSuccess />
  );
  expect(container).toMatchSnapshot();
});
