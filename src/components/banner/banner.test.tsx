import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Banner from './banner';

const banner = {
  'id': 7,
  'name': 'Look 54',
  'previewImg': 'img/content/promo.jpg',
  'previewImg2x': 'img/content/promo@2x.jpg',
  'previewImgWebp': 'img/content/promo.webp',
  'previewImgWebp2x': 'img/content/promo@2x.webp'
};

test('Banner should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <Banner banner={banner} />
    </BrowserRouter>
  );

  const imageElement: HTMLImageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.src).toBe(`http://localhost/${banner.previewImg}`);
  expect(imageElement.srcset).toBe(`${banner.previewImg2x} 2x`);
  expect(screen.getByText(banner.name)).toBeInTheDocument();
});

