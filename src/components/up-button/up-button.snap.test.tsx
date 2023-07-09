import { render } from '@testing-library/react';
import UpButton from './up-button';

test('UpButton snapshot should be rendered correctly', () => {
  const {container} = render(
    <UpButton />
  );
  expect(container).toMatchSnapshot();
});
