type PaginationProps = {
  activePage: number;
  pagesCount: number;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  onClickPage: (pageNumber: number) => void;
}

function Pagination({activePage, pagesCount, onClickNextPage, onClickPrevPage, onClickPage}: PaginationProps): JSX.Element | null {
  if (pagesCount <= 1) {
    return null;
  }

  const pages = [...Array(pagesCount).keys()];
  const isNotFirstPage = activePage !== 1;
  const isNotLastPage = activePage !== pagesCount;
  const handleOnClickNextPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClickNextPage();
  };
  const handleOnClickPrevPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClickPrevPage();
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {isNotFirstPage && (
          <li className="pagination__item"><a className="pagination__link pagination__link--text" href={`catalog/page_${activePage - 1}`} onClick={handleOnClickPrevPage}>Назад</a>
          </li>
        )}
        {
          pages.map((key, index) => {
            const currentPage = index + 1;
            const isActive = activePage === currentPage;
            return (
              <li key={key} className="pagination__item">
                <a className={`pagination__link ${isActive ? 'pagination__link--active' : ''}`} href={`catalog/page_${currentPage}`} onClick={(event) => {
                  event.preventDefault();
                  onClickPage(currentPage);
                }}
                >
                  {currentPage}
                </a>
              </li>
            );
          })
        }
        {isNotLastPage && (
          <li className="pagination__item"><a className="pagination__link pagination__link--text" href={`catalog/page_${activePage + 1}`} onClick={handleOnClickNextPage}>Далее</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
