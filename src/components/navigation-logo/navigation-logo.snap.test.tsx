import { render } from '@testing-library/react';
import NavigationLogo from './navigation-logo';
import { BrowserRouter } from 'react-router-dom';

test('NavigationLogo snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <NavigationLogo />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
