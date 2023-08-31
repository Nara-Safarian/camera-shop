import { useRef } from 'react';
import useEscapeFromModal from '../../hooks/use-escape-from-modal';
import useLockScroll from '../../hooks/use-lock-scroll';
import useRepeatNavigation from '../../hooks/use-repeat-navigation';
import { Product } from '../../types/product';

type BasketRemoveItemProps = {
  product?: Product;
  onClose: () => void;
  onRemove: () => void;
  isActive: boolean;
}

function BasketRemoveItem({product, onClose, onRemove, isActive}: BasketRemoveItemProps): JSX.Element {
  useEscapeFromModal(onClose);
  useLockScroll(isActive);
  const {previewImgWebp = '', previewImgWebp2x = '', previewImg2x = '', previewImg = '', name = ''} = product || {};


  const modalContainerRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLButtonElement>(null);
  const lastElementRef = useRef<HTMLButtonElement>(null);

  useRepeatNavigation({isActive, modalContainerRef, firstElementRef, lastElementRef});

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <symbol id="icon-close" viewBox="0 0 10 10">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor" />
        </symbol>
      </svg>

      <div ref={modalContainerRef} className={`modal ${isActive ? 'is-active' : ''}`}>
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={onClose}>
          </div>
          <div className="modal__content">
            <p className="title title--h4">Удалить этот товар?</p>
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
              </div>
            </div>
            <div className="modal__buttons">
              <button ref={firstElementRef} className="btn btn--purple modal__btn modal__btn--half-width" type="button" onClick={onRemove}>Удалить
              </button>
              <a className="btn btn--transparent modal__btn modal__btn--half-width" href="#" onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              >Продолжить покупки
              </a>
            </div>
            <button ref={lastElementRef} className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasketRemoveItem;
