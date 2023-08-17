import { render, screen } from '@testing-library/react';
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

test('Navigation should be rendered correctly', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Provider>
  );

  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(6);
  expect(screen.getByText('Каталог')).toBeInTheDocument();
  expect(screen.getByText('Гарантии')).toBeInTheDocument();
  expect(screen.getByText('Доставка')).toBeInTheDocument();
  expect(screen.getByText('Сбросить поиск')).toBeInTheDocument();
});

