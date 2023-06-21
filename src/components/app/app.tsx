// import BasketRemoveItem from '../basket-remove-item/basket-remove-item';
import Basket from '../../pages/basket/basket';
import MainCatalog from '../../pages/main-catalog-page/main-catalog-page';
// import BasketSuccess from '../product-basket-success/product-basket-success';
// import CatalogAddItemSuccess from '../catalog-add-item-success/catalog-add-item-success';
// import CatalogAddItem from '../catalog-add-item/catalog-add-item';
import Product from '../../pages/product/product';
// import ProductReviewSuccess from '../product-review-success/product-review-success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../consts';
import NotFoundPage from '../../pages/not-found/not-found';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Catalog}
          element={<MainCatalog />}
        />
        <Route
          path={AppRoute.Product}
          element={<Product />}
        />
        <Route
          path={AppRoute.Basket}
          element={<Basket />}
        />
        <Route path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
