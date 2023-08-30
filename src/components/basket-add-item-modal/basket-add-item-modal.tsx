import { useRef } from 'react';
import useEscapeFromModal from '../../hooks/use-escape-from-modal';
import useLockScroll from '../../hooks/use-lock-scroll';
import useRepeatNavigation from '../../hooks/use-repeat-navigation';
import { Product } from '../../types/product';

type BasketAddItemModalProps = {
  isActive: boolean;
  onClose: () => void;
  onAddProduct: (id: number) => void;
  product?: Product;
}

function BasketAddItemModal({isActive, onClose, product, onAddProduct}: BasketAddItemModalProps): JSX.Element {
  useEscapeFromModal(onClose);
  useLockScroll(isActive);
  const {previewImgWebp = '', previewImgWebp2x = '', previewImg2x = '', previewImg = '', name = ''} = product || {};

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLButtonElement>(null);
  const lastElementRef = useRef<HTMLButtonElement>(null);

  useRepeatNavigation({isActive, modalContainerRef, firstElementRef, lastElementRef});

  return (
    <div ref={modalContainerRef} className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}/>
                <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="140" height="120" alt={name}/>
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{product?.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{product?.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{product?.type} {product?.category.toLowerCase()}</li>
                <li className="basket-item__list-item">{product?.level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{product?.price} ₽</p>
            </div>
          </div>
          <div className="modal__buttons">
            <button ref={firstElementRef} className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={() => onAddProduct(product?.id ?? 0)}>
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
          </div>
          <button ref={lastElementRef} className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketAddItemModal;
