import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterAndSortCards } from '../../store/actions';
import { getSorting } from '../../store/products/selectors';
import { SortBy, SortOrder, Sorting } from '../../types/state';

function CatalogSort (): JSX.Element {
  const sorting = useAppSelector(getSorting);
  const dispatch = useAppDispatch();
  const handleChangeSorting = (newSorting: Partial<Sorting>) => {
    dispatch(filterAndSortCards({sorting: newSorting}));
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPrice" name="sort" checked={sorting.by === SortBy.Price} onChange={() => handleChangeSorting({by: SortBy.Price})}/>
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPopular" name="sort" checked={sorting.by === SortBy.Rating} onChange={() => handleChangeSorting({by: SortBy.Rating})}/>
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input type="radio" id="up" name="sort-icon" aria-label="По возрастанию" checked={sorting.order === SortOrder.Asc} onChange={() => handleChangeSorting({order: SortOrder.Asc})}/>
              <label htmlFor="up">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" checked={sorting.order === SortOrder.Desc} onChange={() => handleChangeSorting({order: SortOrder.Desc})}/>
              <label htmlFor="down">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CatalogSort;
