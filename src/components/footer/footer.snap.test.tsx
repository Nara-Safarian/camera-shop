import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

test('Footer snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});

