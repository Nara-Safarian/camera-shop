import { render } from '@testing-library/react';
import Loader from './loader';

test('Loader snapshot should be rendered correctly', () => {
  const {container} = render(
    <Loader />
  );
  expect(container).toMatchSnapshot();
});
