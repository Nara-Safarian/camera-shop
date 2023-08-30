import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { NameSpace } from '../../consts';
import { initialState as productsInitialState } from '../../store/products/products';
import { initialState as productCardInitialState } from '../../store/product-card/product-card';
import { initialState as bannerInitialState } from '../../store/banner/banner';
import { initialState as reviewsCardInitialState } from '../../store/reviews/reviews';
import { initialState as basketCardInitialState } from '../../store/basket/basket';
const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Products]: {...productsInitialState},
  [NameSpace.Banner]: {...bannerInitialState},
  [NameSpace.ProductCard]: {...productCardInitialState},
  [NameSpace.Reviews]: {...reviewsCardInitialState},
  [NameSpace.Basket]: {...basketCardInitialState}
});
store.dispatch = jest.fn();

test('Navigation snapshot should be rendered correctly', () => {
  const {container} = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});

