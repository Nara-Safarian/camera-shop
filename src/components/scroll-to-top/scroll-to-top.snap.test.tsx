import { render } from '@testing-library/react';
import ScrollToTop from './scroll-to-top';
import { BrowserRouter } from 'react-router-dom';

window.scrollTo = jest.fn();

test('ScrollToTop snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
