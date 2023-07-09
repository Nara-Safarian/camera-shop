import { render } from '@testing-library/react';
import App from './app';

import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { NameSpace } from '../../consts';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.Products]: {allProducts: []},
  [NameSpace.Banner]: {banner: null},
});

store.dispatch = jest.fn();
window.scrollTo = jest.fn();

test('App snapshot should be rendered correctly', () => {
  const {container} = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
