import { render, screen } from '@testing-library/react';
import NavigationLogo from './navigation-logo';
import { BrowserRouter } from 'react-router-dom';

test('NavigationLogo should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <NavigationLogo />
    </BrowserRouter>
  );
  expect(screen.getAllByRole('link').length).toBe(1);
});
