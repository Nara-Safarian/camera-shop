import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation';

test('Navigation should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(6);
  expect(screen.getByText('Каталог')).toBeInTheDocument();
  expect(screen.getByText('Гарантии')).toBeInTheDocument();
  expect(screen.getByText('Доставка')).toBeInTheDocument();
  expect(screen.getByText('Сбросить поиск')).toBeInTheDocument();
});

