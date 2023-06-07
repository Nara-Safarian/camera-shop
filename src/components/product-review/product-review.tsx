function ProductReview(): JSX.Element {
  return (
    <>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="icon-close" viewBox="0 0 10 10">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor"/>
          </symbol>
          <symbol id="icon-form-star" viewBox="0 0 9 9">
            <path d="M5.375 0.84375L5.05469 3.71875L7.96875 2.90625L8.22656 4.875L5.57031 5.0625L7.3125 7.38281L5.53906 8.32812L4.32031 5.88281L3.25 8.3125L1.40625 7.38281L3.13281 5.0625L0.492188 4.85938L0.796875 2.90625L3.64844 3.71875L3.32812 0.84375H5.375Z" fill="#ED6041"/>
          </symbol>
          <symbol id="icon-full-star" viewBox="0 0 17 16">
            <path d="M7.58854 0.557266C7.96138 -0.185755 9.03862 -0.185755 9.41146 0.557266L11.2507 4.22265C11.3987 4.5177 11.6849 4.72221 12.016 4.76953L16.1286 5.3573C16.9623 5.47645 17.2952 6.48411 16.6919 7.06248L13.716 9.91558C13.4765 10.1452 13.3671 10.4761 13.4237 10.8004L14.1262 14.8291C14.2686 15.6457 13.3971 16.2685 12.6514 15.8829L8.97298 13.9809C8.67688 13.8278 8.32313 13.8278 8.02702 13.9809L4.34856 15.8829C3.60289 16.2685 2.73138 15.6457 2.87379 14.8291L3.57631 10.8004C3.63286 10.4761 3.52355 10.1452 3.28399 9.91558L0.308057 7.06248C-0.295204 6.48411 0.0376828 5.47645 0.87137 5.3573L4.98401 4.76953C5.31507 4.72221 5.60126 4.5177 5.74931 4.22265L7.58854 0.557266Z" fill="#ED9E41"/>
          </symbol>
          <symbol id="icon-snowflake" viewBox="0 0 9 9">
            <path d="M5.375 0.84375L5.05469 3.71875L7.96875 2.90625L8.22656 4.875L5.57031 5.0625L7.3125 7.38281L5.53906 8.32812L4.32031 5.88281L3.25 8.3125L1.40625 7.38281L3.13281 5.0625L0.492188 4.85938L0.796875 2.90625L3.64844 3.71875L3.32812 0.84375H5.375Z" fill="#ED6041"/>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 17 16">
            <path d="M7.58854 0.557266C7.96138 -0.185755 9.03862 -0.185755 9.41146 0.557266L11.2507 4.22265C11.3987 4.5177 11.6849 4.72221 12.016 4.76953L16.1286 5.3573C16.9623 5.47645 17.2952 6.48411 16.6919 7.06248L13.716 9.91558C13.4765 10.1452 13.3671 10.4761 13.4237 10.8004L14.1262 14.8291C14.2686 15.6457 13.3971 16.2685 12.6514 15.8829L8.97298 13.9809C8.67688 13.8278 8.32313 13.8278 8.02702 13.9809L4.34856 15.8829C3.60289 16.2685 2.73138 15.6457 2.87379 14.8291L3.57631 10.8004C3.63286 10.4761 3.52355 10.1452 3.28399 9.91558L0.308057 7.06248C-0.295204 6.48411 0.0376828 5.47645 0.87137 5.3573L4.98401 4.76953C5.31507 4.72221 5.60126 4.5177 5.74931 4.22265L7.58854 0.557266Z" fill="currentColor"/>
          </symbol>
        </svg>
      </div>


      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post">
              <div className="form-review__rate">
                <fieldset className="rate form-review__item">
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5" />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4" />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3" />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2" />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1" />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    </div>
                    <div className="rate__progress"><span className="rate__stars">0</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" name="user-name" placeholder="Введите ваше имя" required />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" name="user-plus" placeholder="Основные преимущества товара" required />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" name="user-minus" placeholder="Главные недостатки товара" required />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea name="user-comment" minLength={5} placeholder="Поделитесь своим опытом покупки"></textarea>
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductReview;
