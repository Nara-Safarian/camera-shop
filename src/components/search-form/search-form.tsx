import { useEffect, useRef, useState, FocusEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSearchProducts } from '../../store/products/selectors';
import { searchCards } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { fetchBannerAction, fetchAllProductsAction } from '../../store/api-actions';

function SearchForm(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerAction());
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperProductsRef = useRef<HTMLUListElement>(null);
  const childrenRefs = useRef<Array<HTMLLIElement | null>>([]);
  const searchProducts = useAppSelector(getSearchProducts);
  const [value, setValue] = useState('');
  const [hasFocus, setHasFocus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(searchCards(value));
  }, [value, dispatch]);

  const handleLink = (id: number) => {
    setHasFocus(false);
    navigate(`/cameras/${id}`);
  };

  useEffect(() => {
    if (wrapperProductsRef.current) {
      const children = Array.from(wrapperProductsRef.current.children) as HTMLLIElement[];
      childrenRefs.current = children.map((child) => child);
    }
  }, [searchProducts]);

  const focusChild = (index: number) => {
    if (childrenRefs.current.length > 0) {
      const clampedIndex = Math.max(0, Math.min(index, childrenRefs.current.length - 1));
      const child = childrenRefs.current[clampedIndex];
      if (child) {
        child.focus();
      }
    }
  };

  const handleFocusCheck = (event: FocusEvent<HTMLDivElement>) => {
    const focusedElement = event.relatedTarget as HTMLElement;
    const isFocusedWithinWrapper = wrapperRef.current?.contains(focusedElement) || focusedElement === wrapperRef.current;
    if (!isFocusedWithinWrapper) {
      setHasFocus(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLLIElement>, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLink(id);
    }
  };

  const handleNavigation = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const currentIndex = childrenRefs.current.indexOf(document.activeElement as HTMLLIElement);
      focusChild(currentIndex + 1);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const currentIndex = childrenRefs.current.indexOf(document.activeElement as HTMLLIElement);
      focusChild(currentIndex - 1);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`form-search ${hasFocus && Boolean(searchProducts.length) ? 'list-opened' : ''} ${value ? 'reset-visible' : 'reset-invisible'}`}
      onFocus={() => setHasFocus(true)}
      onBlur={handleFocusCheck}
      onKeyDown={handleNavigation}
    >
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input
            className="form-search__input"
            type="text"
            value={value}
            autoComplete="off"
            placeholder="Поиск по сайту"
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
        <ul className="form-search__select-list" ref={wrapperProductsRef}>
          {searchProducts.map((product) => (
            <li key={product.id} className="form-search__select-item" tabIndex={0}
              onClick={() => handleLink(product.id)}
              onKeyDown={(event) => handleKeyPress(event, product.id)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </form>
      <button className="form-search__reset" type="reset" onClick={() => {
        setValue('');
      }}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>

  );
}

export default SearchForm;
