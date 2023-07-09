import { render, screen } from '@testing-library/react';
import FooterLogo from './footer-logo';
import { BrowserRouter } from 'react-router-dom';

test('FooterLogo should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <FooterLogo />
    </BrowserRouter>
  );
  expect(screen.getAllByRole('link').length).toBe(1);
});
