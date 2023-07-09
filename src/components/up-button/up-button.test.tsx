import { render, screen } from '@testing-library/react';
import UpButton from './up-button';

test('UpButton should be rendered correctly', () => {
  render(
    <UpButton />
  );
  expect(screen.getByRole('button')).toBeInTheDocument();
});
