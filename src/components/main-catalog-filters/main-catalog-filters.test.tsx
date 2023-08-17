import { render, screen } from '@testing-library/react';
import MainCatalogFilters from './main-catalog-filters';

import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { initialState as productsInitialState } from '../../store/products/products';
import { initialState as productCardInitialState } from '../../store/product-card/product-card';
import { initialState as bannerInitialState } from '../../store/banner/banner';
import { initialState as reviewsCardInitialState } from '../../store/reviews/reviews';
import { NameSpace } from '../../consts';
const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Products]: {...productsInitialState},
  [NameSpace.Banner]: {...bannerInitialState},
  [NameSpace.ProductCard]: {...productCardInitialState},
  [NameSpace.Reviews]: {...reviewsCardInitialState}
});
store.dispatch = jest.fn();
window.scrollTo = jest.fn();

test('MainCatalogFilters should be rendered correctly', () => {
  render(
    <Provider store={store}>
      <MainCatalogFilters />
    </Provider>
  );
  expect(screen.getByText('Категория')).toBeInTheDocument();
  expect(screen.getByText('Тип камеры')).toBeInTheDocument();
  expect(screen.getByText('Уровень')).toBeInTheDocument();
  expect(screen.getByText('Сбросить фильтры')).toBeInTheDocument();
});
