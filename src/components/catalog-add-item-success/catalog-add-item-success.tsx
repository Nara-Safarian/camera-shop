import { useRef, useEffect } from 'react';
import useEscapeFromModal from '../../hooks/use-escape-from-modal';
import useLockScroll from '../../hooks/use-lock-scroll';

type CatalogAddItemSuccessProps = {
  isActive: boolean;
  onClose: () => void;
}

function CatalogAddItemSuccess({isActive, onClose}: CatalogAddItemSuccessProps): JSX.Element {
  useEscapeFromModal(onClose);
  useLockScroll(isActive);

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLAnchorElement>(null);
  const lastElementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // If Shift + Tab is pressed, focus the last element
          if (document.activeElement === firstElementRef.current) {
            e.preventDefault();
            if (lastElementRef.current) {
              lastElementRef.current.focus();
            }
          }
        } else {
          // If Tab is pressed, focus the first element
          if (document.activeElement === lastElementRef.current) {
            e.preventDefault();
            if (firstElementRef.current) {
              firstElementRef.current.focus();
            }
          }
        }
      }
    };

    setTimeout(() => {
      if (firstElementRef.current) {
        firstElementRef.current.focus();
      }
    }, 10);

    const modalContainer = modalContainerRef.current;
    if (modalContainer) {
      modalContainer.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (modalContainer) {
        modalContainer.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isActive]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <symbol id="icon-close" viewBox="0 0 10 10">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor" />
        </symbol>
        <symbol id="icon-success" viewBox="0 0 86 80">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.8883 8.40415C25.1374 4.22866 32.4843 2 40 2C40.5523 2 41 1.55228 41 1C41 0.447715 40.5523 0 40 0C32.0888 0 24.3552 2.34596 17.7772 6.74122C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5629 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C55.8176 76.7438 56.0599 76.1589 55.8485 75.6486C55.6372 75.1384 55.0522 74.8961 54.542 75.1074C47.5984 77.9836 39.9579 78.7361 32.5866 77.2698C25.2153 75.8036 18.4444 72.1844 13.13 66.8701C7.81556 61.5557 4.19642 54.7847 2.73018 47.4134C1.26394 40.0422 2.01647 32.4016 4.8926 25.458C7.76873 18.5144 12.6393 12.5796 18.8883 8.40415ZM80 40C80 39.4477 79.5523 39 79 39C78.4477 39 78 39.4477 78 40C78 47.5157 75.7714 54.8626 71.5959 61.1117C68.8832 65.1715 65.4279 68.6495 61.4359 71.3768C60.9799 71.6883 60.8628 72.3106 61.1743 72.7666C61.4859 73.2226 62.1081 73.3398 62.5641 73.0282C66.7662 70.1574 70.4033 66.4963 73.2588 62.2228C77.6541 55.6448 80 47.9113 80 40ZM29.714 9.69823C35.7071 7.66384 42.1689 7.45231 48.2822 9.09038C48.8157 9.23332 49.364 8.91674 49.507 8.38327C49.6499 7.8498 49.3333 7.30147 48.7999 7.15853C42.3044 5.41808 35.4388 5.64283 29.0711 7.80437C26.3737 8.72002 23.8169 9.96579 21.4546 11.5032C20.9917 11.8045 20.8606 12.4239 21.1619 12.8868C21.4631 13.3497 22.0826 13.4807 22.5455 13.1795C24.7689 11.7325 27.1752 10.56 29.714 9.69823ZM14.6127 20.5196C14.9489 20.0815 14.8663 19.4537 14.4281 19.1175C13.99 18.7813 13.3622 18.8639 13.026 19.3021C8.93235 24.6371 6.51262 31.0661 6.07281 37.7763C5.63301 44.4865 7.19287 51.1763 10.5552 57C13.9174 62.8236 18.9311 67.5195 24.9622 70.4937C30.9933 73.4679 37.7709 74.5869 44.4379 73.7091C51.1049 72.8314 57.362 69.9964 62.4178 65.5626C67.4736 61.1287 71.101 55.2953 72.8415 48.7999C72.9844 48.2664 72.6678 47.718 72.1344 47.5751C71.6009 47.4322 71.0526 47.7487 70.9096 48.2822C69.2716 54.3956 65.8575 59.8859 61.0991 64.0589C56.3407 68.2319 50.4517 70.9001 44.1768 71.7262C37.902 72.5523 31.5231 71.4992 25.8468 68.6999C20.1705 65.9007 15.4517 61.4811 12.2872 56C9.1227 50.5189 7.65459 44.2225 8.06853 37.9071C8.48247 31.5916 10.7599 25.5408 14.6127 20.5196ZM83.7071 12.2929C84.0976 12.6834 84.0976 13.3166 83.7071 13.7071L40.7071 56.7071C40.3166 57.0976 39.6834 57.0976 39.2929 56.7071L31.2929 48.7071C30.9024 48.3166 30.9024 47.6834 31.2929 47.2929C31.6834 46.9024 32.3166 46.9024 32.7071 47.2929L40 54.5858L82.2929 12.2929C82.6834 11.9024 83.3166 11.9024 83.7071 12.2929ZM18.2929 34.2929C18.6834 33.9024 19.3166 33.9024 19.7071 34.2929L29.7071 44.2929C30.0976 44.6834 30.0976 45.3166 29.7071 45.7071C29.3166 46.0976 28.6834 46.0976 28.2929 45.7071L18.2929 35.7071C17.9024 35.3166 17.9024 34.6834 18.2929 34.2929ZM85.7071 3.70711C86.0976 3.31658 86.0976 2.68342 85.7071 2.29289C85.3166 1.90237 84.6834 1.90237 84.2929 2.29289L72.7929 13.7929C72.4024 14.1834 72.4024 14.8166 72.7929 15.2071C73.1834 15.5976 73.8166 15.5976 74.2071 15.2071L85.7071 3.70711ZM69.2071 20.2071C69.5976 19.8166 69.5976 19.1834 69.2071 18.7929C68.8166 18.4024 68.1834 18.4024 67.7929 18.7929L40 46.5858L26.7071 33.2929C26.3166 32.9024 25.6834 32.9024 25.2929 33.2929C24.9024 33.6834 24.9024 34.3166 25.2929 34.7071L39.2929 48.7071C39.6834 49.0976 40.3166 49.0976 40.7071 48.7071L69.2071 20.2071Z" fill="#65CD54"/>
        </symbol>
      </svg>

      <div ref={modalContainerRef} className={`modal ${isActive ? 'is-active' : ''} modal--narrow`}>
        <div className="modal__wrapper">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <p className="title title--h4">Товар успешно добавлен в корзину</p>
            <svg className="modal__icon" width="86" height="80" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <div className="modal__buttons"><a ref={firstElementRef} className="btn btn--transparent modal__btn" href="#">Продолжить покупки</a>
              <button className="btn btn--purple modal__btn modal__btn--fit-width">Перейти в корзину</button>
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

export default CatalogAddItemSuccess;
