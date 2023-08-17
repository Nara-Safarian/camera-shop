import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { NameSpace } from '../../consts';
const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Products]: {allProducts: [], searchProducts: []},
  [NameSpace.Banner]: {banner: null},
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

