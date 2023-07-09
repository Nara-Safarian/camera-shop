import { render } from '@testing-library/react';
import ShowMoreButton from './show-more-button';

test('ShowMoreButton snapshot should be rendered correctly', () => {
  const {container} = render(
    <ShowMoreButton onClick={function (): void {
      // nothing
    } }
    />
  );
  expect(container).toMatchSnapshot();
});
