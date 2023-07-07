import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation';

test('Navigation snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});

