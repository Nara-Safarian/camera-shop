import { render, screen } from '@testing-library/react';
import Pagination from './pagination';

test('Pagination should be rendered correctly', () => {
  render(
    <Pagination activePage={2} pagesCount={10} onClickNextPage={function (): void {
      // nothing
    } } onClickPrevPage={function (): void {
      // nothing
    } } onClickPage={function (): void {
      // nothing
    } }
    />
  );
  expect(screen.getAllByRole('link').length).toBe(12);
});
