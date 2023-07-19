import { render, screen } from '@testing-library/react';
import Pagination from './pagination';
import { BrowserRouter } from 'react-router-dom';

test('Pagination should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <Pagination activePage={2} pagesCount={10} />
    </BrowserRouter>
  );
  expect(screen.getAllByRole('link').length).toBe(12);
});
