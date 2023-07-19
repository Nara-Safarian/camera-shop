import { render } from '@testing-library/react';
import Pagination from './pagination';
import { BrowserRouter } from 'react-router-dom';

test('Pagination snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <Pagination activePage={2} pagesCount={10} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
