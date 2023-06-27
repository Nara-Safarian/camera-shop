function BasketRemoveItem(): JSX.Element {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <symbol id="icon-close" viewBox="0 0 10 10">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor" />
        </symbol>
      </svg>

      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay">
          </div>
          <div className="modal__content">
            <p className="title title--h4">Удалить этот товар?</p>
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
              </div>
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--half-width" type="button">Удалить
              </button>
              <a className="btn btn--transparent modal__btn modal__btn--half-width" href="#">Продолжить покупки
              </a>
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

export default BasketRemoveItem;
