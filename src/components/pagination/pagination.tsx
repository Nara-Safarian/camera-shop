import { useLocation, Link } from 'react-router-dom';

type PaginationProps = {
  activePage: number;
  pagesCount: number;
}

const getPageLink = (pathname: string, page: number) => {
  const newSearchParams = new URLSearchParams();
  newSearchParams.set('page', String(page));
  return `${pathname}?${newSearchParams.toString()}`;
};

function Pagination({activePage, pagesCount}: PaginationProps): JSX.Element | null {
  const {pathname} = useLocation();
  if (pagesCount <= 1) {
    return null;
  }

  const pages = [...Array(pagesCount).keys()];
  const isNotFirstPage = activePage !== 1;
  const isNotLastPage = activePage !== pagesCount;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {isNotFirstPage && (
          <li className="pagination__item"><Link className="pagination__link pagination__link--text" to={getPageLink(pathname, activePage - 1)}>Назад</Link>
          </li>
        )}
        {
          pages.map((key, index) => {
            const currentPage = index + 1;
            const isActive = activePage === currentPage;
            return (
              <li key={key} className="pagination__item">
                <Link className={`pagination__link ${isActive ? 'pagination__link--active' : ''}`} to={getPageLink(pathname, currentPage)}>
                  {currentPage}
                </Link>
              </li>
            );
          })
        }
        {isNotLastPage && (
          <li className="pagination__item"><Link className="pagination__link pagination__link--text" to={getPageLink(pathname, activePage + 1)}>Далее</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
