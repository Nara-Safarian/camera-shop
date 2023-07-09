import { render } from '@testing-library/react';
import FooterLogo from './footer-logo';
import { BrowserRouter } from 'react-router-dom';

test('FooterLogo snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <FooterLogo />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
