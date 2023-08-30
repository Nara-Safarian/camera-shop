import { Link } from 'react-router-dom';
import { CameraCard } from '../../types/camera-card';
import ProductCardRating from '../product-card-rating/product-card-rating';
import { useAppSelector } from '../../hooks';
import { getBasket } from '../../store/basket/selectors';

type ProductCardProps = {
  product: CameraCard;
  isActive?: boolean;
  onProductBuyClick?: () => void;
}

function ProductCard({product, isActive, onProductBuyClick}: ProductCardProps): JSX.Element {
  const {id, previewImgWebp, previewImgWebp2x, previewImg2x, previewImg, name, reviewCount, price, reviews} = product;
  const basket = useAppSelector(getBasket);
  const isInBasket = Boolean(basket.find(({product: p}) => p.id === product.id));

  const handleOnProductBuyClick = () => {
    if (onProductBuyClick) {
      onProductBuyClick();
    }
  };

  return (
    <div className={`product-card ${isActive ? 'is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}/>
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="280" height="240" alt={name}/>
        </picture>
      </div>
      <div className="product-card__info">
        <ProductCardRating reviewCount={reviewCount} reviews={reviews} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        {
          isInBasket ?
            (
              <Link className="btn btn--purple-border product-card__btn product-card__btn--in-cart" to="/orders">
                <svg width="16" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-basket"></use>
                </svg>В корзине
              </Link>
            )
            : (
              <button className="btn btn--purple product-card__btn" type="button" onClick={handleOnProductBuyClick}>
                Купить
              </button>
            )
        }

        <Link to={`/cameras/${id}`} className="btn btn--transparent">Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
