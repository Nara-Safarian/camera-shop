function CatalogAddItem(): JSX.Element {
  return (
    <>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="icon-add-basket" viewBox="0 0 24 16">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.44775 0.105325C8.95378 -0.141688 8.3531 0.058507 8.10608 0.552473C7.85907 1.04644 8.05926 1.64712 8.55323 1.89414L10.0669 2.65107L10.3402 5.11042L11.0068 11.1104C11.0631 11.6168 11.4912 12 12.0007 12H21.0007C21.4472 12 21.8396 11.704 21.9623 11.2747L23.9623 4.2747C24.0526 3.95848 23.9817 3.61806 23.7726 3.36421C23.5635 3.11036 23.243 2.97554 22.9153 3.00363L12.2203 3.92036L11.9946 1.88954C11.9572 1.55242 11.7514 1.25728 11.448 1.10557L9.44775 0.105325ZM12.8958 9.99998L12.4412 5.90876L21.6406 5.12022L20.2464 9.99998H12.8958ZM4.99951 4.99973C4.99951 4.44745 4.5518 3.99973 3.99951 3.99973C3.44723 3.99973 2.99951 4.44745 2.99951 4.99973V6.99973H0.999512C0.447227 6.99973 -0.000488281 7.44745 -0.000488281 7.99973C-0.000488281 8.55202 0.447227 8.99973 0.999512 8.99973H2.99951V10.9997C2.99951 11.552 3.44723 11.9997 3.99951 11.9997C4.5518 11.9997 4.99951 11.552 4.99951 10.9997V8.99973H6.99951C7.5518 8.99973 7.99951 8.55202 7.99951 7.99973C7.99951 7.44745 7.5518 6.99973 6.99951 6.99973H4.99951V4.99973ZM14.0005 14.5002C14.0005 15.3286 13.3289 16.0002 12.5005 16.0002C11.6721 16.0002 11.0005 15.3286 11.0005 14.5002C11.0005 13.6718 11.6721 13.0002 12.5005 13.0002C13.3289 13.0002 14.0005 13.6718 14.0005 14.5002ZM19.501 16.0002C20.3294 16.0002 21.001 15.3286 21.001 14.5002C21.001 13.6718 20.3294 13.0002 19.501 13.0002C18.6726 13.0002 18.001 13.6718 18.001 14.5002C18.001 15.3286 18.6726 16.0002 19.501 16.0002Z" fill="currentColor"/>
          </symbol>
          <symbol id="icon-close" viewBox="0 0 10 10">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor" />
          </symbol>
        </svg>
      </div>

      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <p className="title title--h4">Добавить товар в корзину</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/img9.webp, img/content/img9@2x.webp 2x" />
                  <img src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="140" height="120" alt="Фотоаппарат «Орлёнок»" />
                </picture>
              </div>
              <div className="basket-item__description">
                <p className="basket-item__title">Орлёнок</p>
                <ul className="basket-item__list">
                  <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">O78DFGSD832</span>
                  </li>
                  <li className="basket-item__list-item">Плёночная фотокамера</li>
                  <li className="basket-item__list-item">Любительский уровень</li>
                </ul>
                <p className="basket-item__price"><span className="visually-hidden">Цена:</span>18 970 ₽</p>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>Добавить в корзину
              </button>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап">
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

export default CatalogAddItem;
