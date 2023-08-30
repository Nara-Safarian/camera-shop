import { render, screen } from '@testing-library/react';
import ProductCard from './product-card';
import { BrowserRouter } from 'react-router-dom';
import { initialState as productsInitialState } from '../../store/products/products';
import { initialState as productCardInitialState } from '../../store/product-card/product-card';
import { initialState as bannerInitialState } from '../../store/banner/banner';
import { initialState as reviewsCardInitialState } from '../../store/reviews/reviews';
import { initialState as basketCardInitialState } from '../../store/basket/basket';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { NameSpace } from '../../consts';
const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Products]: {...productsInitialState},
  [NameSpace.Banner]: {...bannerInitialState},
  [NameSpace.ProductCard]: {...productCardInitialState},
  [NameSpace.Reviews]: {...reviewsCardInitialState},
  [NameSpace.Basket]: {...basketCardInitialState}
});
store.dispatch = jest.fn();

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

test('ProductCard should be rendered correctly', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductCard product={product} onProductBuyClick={function (): void {
          // nothing
        } }
        />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText('Всего оценок:')).toBeInTheDocument();
  expect(screen.getByText('Цена:')).toBeInTheDocument();
  expect(screen.getByText('Купить')).toBeInTheDocument();
  expect(screen.getByText('Подробнее')).toBeInTheDocument();
  expect(screen.getByText(product.reviewCount)).toBeInTheDocument();
});
