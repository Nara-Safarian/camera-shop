import { render, screen } from '@testing-library/react';
import ShowMoreButton from './show-more-button';

test('ShowMoreButton should be rendered correctly', () => {
  render(
    <ShowMoreButton onClick={function (): void {
      // nothing
    } }
    />
  );
  expect(screen.getByText('Показать больше отзывов')).toBeInTheDocument();
});
