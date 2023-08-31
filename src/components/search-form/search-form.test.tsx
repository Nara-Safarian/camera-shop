import { render, screen } from '@testing-library/react';
import SearchForm from './search-form';

import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { initialState as productsInitialState } from '../../store/products/products';
import { initialState as productCardInitialState } from '../../store/product-card/product-card';
import { initialState as bannerInitialState } from '../../store/banner/banner';
import { initialState as reviewsCardInitialState } from '../../store/reviews/reviews';
import { initialState as basketCardInitialState } from '../../store/basket/basket';
import { NameSpace } from '../../consts';
import { BrowserRouter } from 'react-router-dom';
const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Products]: {...productsInitialState},
  [NameSpace.Banner]: {...bannerInitialState},
  [NameSpace.ProductCard]: {...productCardInitialState},
  [NameSpace.Reviews]: {...reviewsCardInitialState},
  [NameSpace.Basket]: {...basketCardInitialState}
});
store.dispatch = jest.fn();
window.scrollTo = jest.fn();

test('SearchForm should be rendered correctly', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <SearchForm />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByText('Сбросить поиск')).toBeInTheDocument();
});
