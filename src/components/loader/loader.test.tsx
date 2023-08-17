import { render, screen } from '@testing-library/react';
import Loader from './loader';

test('Loader should be rendered correctly', () => {
  render(
    <Loader />
  );
  expect(screen.getByText((_, element) => element?.tagName.toLowerCase() === 'div' && element?.className === 'three-body-wrapper')).toBeInTheDocument();
});
