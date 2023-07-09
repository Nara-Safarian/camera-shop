import { render } from '@testing-library/react';
import Pagination from './pagination';

test('Pagination snapshot should be rendered correctly', () => {
  const {container} = render(
    <Pagination activePage={2} pagesCount={10} onClickNextPage={function (): void {
      // nothing
    } } onClickPrevPage={function (): void {
      // nothing
    } } onClickPage={function (): void {
      // nothing
    } }
    />
  );
  expect(container).toMatchSnapshot();
});
