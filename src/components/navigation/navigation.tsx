import { Link } from 'react-router-dom';
import NavigationLogo from '../navigation-logo/navigation-logo';
import SearchForm from '../search-form/search-form';
import { useAppSelector } from '../../hooks';
import { getBasket } from '../../store/basket/selectors';

function Navigation(): JSX.Element {
  const basket = useAppSelector(getBasket);
  const basketCount = basket.reduce((sum, {amount}) => sum + amount, 0);
  return (
    <header className="header" id="header">
      <div className="container">

        <NavigationLogo />

        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item"><Link className="main-nav__link" to="/">Каталог</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="/">Гарантии</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="/">Доставка</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="/">О компании</Link>
            </li>
          </ul>
        </nav>
        < SearchForm />
        <Link className="header__basket-link" to="/orders">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          {Boolean(basketCount) && <span className="header__basket-count">{basketCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
