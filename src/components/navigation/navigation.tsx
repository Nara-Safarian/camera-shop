import NavigationLogo from '../navigation-logo/navigation-logo';
import SearchForm from '../search-form/search-form';

function Navigation(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">

        <NavigationLogo />

        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item"><a className="main-nav__link" href="catalog.html">Каталог</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">Гарантии</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">Доставка</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
        < SearchForm />
        <a className="header__basket-link" href="#">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Navigation;
