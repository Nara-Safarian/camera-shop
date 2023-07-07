import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

test('Footer should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(13);
  expect(screen.getByText('Интернет-магазин фото- и видеотехники')).toBeInTheDocument();
  expect(screen.getByText('Гарантии')).toBeInTheDocument();
  expect(screen.getByText('Задать вопрос')).toBeInTheDocument();
});

