import { render } from '@testing-library/react';
import CloseButton from './close-button';

test('CloseButton snapshot should be rendered correctly', () => {
  const {container} = render(
    <CloseButton onClose={() => {
      // nothing
    }}
    />
  );
  expect(container).toMatchSnapshot();
});
