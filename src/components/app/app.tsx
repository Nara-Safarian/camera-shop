import MainCatalog from '../../pages/main-catalog-page/main-catalog-page';
import Product from '../../pages/product/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../consts';
import NotFoundPage from '../../pages/not-found/not-found';
import ScrollToTop from '../scroll-to-top/scroll-to-top';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Catalog}
          element={<MainCatalog />}
        />
        <Route
          path={AppRoute.Product}
          element={<Product />}
        />
        <Route path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
