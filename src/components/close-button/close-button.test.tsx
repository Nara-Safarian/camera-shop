import { render, screen } from '@testing-library/react';
import CloseButton from './close-button';

test('CloseButton should be rendered correctly', () => {
  render(
    <CloseButton onClose={() => {
      // nothing
    }}
    />
  );
  expect(screen.getByRole('button')).toBeInTheDocument();
});
