import { render } from '@testing-library/react';
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

test('Banner snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <Banner banner={banner} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

