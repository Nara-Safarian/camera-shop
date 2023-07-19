import { useState } from 'react';
import { Product } from '../../types/product';
import ProductCard from '../product-card/product-card';

type SimilarProductsProps = {
  products: Product[];
}

const CARD_LIMIT = 3;

function SimilarProducts({products}: SimilarProductsProps): JSX.Element {
  const [page, setPage] = useState(0);
  const lastPage = products.length === 0 ? 0 : (Math.ceil(products.length / CARD_LIMIT) - 1);

  const handleClickRight = () => setPage(page + 1);
  const handleClickLeft = () => setPage(page - 1);
  const isLeftButtonDisable = page === 0 ? true : undefined;
  const isRightButtonDisable = page === lastPage ? true : undefined;

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {
              products.map((product, index) => {
                const startIndex = page * CARD_LIMIT;
                const endIndex = startIndex + CARD_LIMIT;

                const isActive = index >= startIndex && index < endIndex;
                return (<ProductCard product={product} key={product.id} isActive={isActive}/>);
              })
            }
          </div>
          <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled={isLeftButtonDisable} onClick={handleClickLeft} style={{pointerEvents: isLeftButtonDisable ? 'none' : 'all'}}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" onClick={handleClickRight} style={{pointerEvents: isRightButtonDisable ? 'none' : 'all'}} disabled={isRightButtonDisable}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SimilarProducts;
