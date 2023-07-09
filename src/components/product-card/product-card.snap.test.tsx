import { render } from '@testing-library/react';
import ProductCard from './product-card';
import { BrowserRouter } from 'react-router-dom';

const product = {
  'id': 1,
  'name': 'Ретрокамера Dus Auge lV',
  'vendorCode': 'DA4IU67AD5',
  'type': 'Коллекционная',
  'category': 'Видеокамера',
  'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
  'previewImg': 'img/content/das-auge.jpg',
  'level': 'Любительский',
  'price': 73450,
  'previewImg2x': 'img/content/das-auge@2x.jpg',
  'previewImgWebp': 'img/content/das-auge.webp',
  'previewImgWebp2x': 'img/content/das-auge@2x.webp',
  'reviewCount': 149
};

test('ProductCard snapshot should be rendered correctly', () => {
  const {container} = render(
    <BrowserRouter>
      <ProductCard product={product} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
