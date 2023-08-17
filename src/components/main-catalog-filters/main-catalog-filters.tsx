import { debounce } from 'lodash';
import { ProductCategory, ProductLevel, ProductType } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterAndSortCards } from '../../store/actions';
import { DEFAULT_FILTER } from '../../store/products/products';
import { getFilter } from '../../store/products/selectors';
import { Filter } from '../../types/state';
import { useCallback, useEffect, useState } from 'react';

const DEBOUNCE_MS = 500;

function MainCatalogFilters(): JSX.Element {
  const filter = useAppSelector(getFilter);
  const dispatch = useAppDispatch();
  const handleChangeFilter = useCallback((newFilter: Partial<Filter>) => {
    dispatch(filterAndSortCards({filter: newFilter}));
  }, [dispatch]);
  const handleResetFilter = () => {
    dispatch(filterAndSortCards({filter: {...DEFAULT_FILTER}}));
  };

  const handleChangeCategory = (category: ProductCategory) => {
    if (filter.category === category) {
      handleChangeFilter({category: undefined});
    } else {
      handleChangeFilter({category});
    }
  };

  const handleChangeType = (type: ProductType) => {
    if (filter.type && filter.type.includes(type)) {
      handleChangeFilter({type: filter.type.filter((value) => value !== type)});
    } else {
      handleChangeFilter({type: [...(filter.type || []), type]});
    }
  };

  const handleChangeLevel = (level: ProductLevel) => {
    if (filter.level && filter.level.includes(level)) {
      handleChangeFilter({level: filter.level.filter((value) => value !== level)});
    } else {
      handleChangeFilter({level: [...(filter.level || []), level]});
    }
  };

  const [minPrice, setMinPrice] = useState(filter.minPrice);
  const [maxPrice, setMaxPrice] = useState(filter.maxPrice);

  const handleDebouncedChangeMinPrice = useCallback(debounce((newMinPrice: number) => {
    handleChangeFilter({minPrice: newMinPrice});
  }, DEBOUNCE_MS), [handleChangeFilter]);

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseFloat(event.target.value);
    if (isNaN(newValue)) {
      newValue = filter.minPrice;
    }
    setMinPrice(newValue);
    handleDebouncedChangeMinPrice(newValue);
  };

  const handleDebouncedChangeMaxPrice = useCallback(debounce((newMaxPrice: number) => {
    handleChangeFilter({maxPrice: newMaxPrice});
  }, DEBOUNCE_MS), [handleChangeFilter]);

  const handleChangeMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseFloat(event.target.value);
    if (isNaN(newValue)) {
      newValue = filter.maxPrice;
    }
    setMaxPrice(newValue);
    handleDebouncedChangeMaxPrice(newValue);
  };

  useEffect(() => {
    setMinPrice(filter.minPrice);
    setMaxPrice(filter.maxPrice);
  }, [filter]);

  useEffect(() => () => {
    handleDebouncedChangeMinPrice.cancel();
    handleDebouncedChangeMaxPrice.cancel();
  }, [handleDebouncedChangeMinPrice, handleDebouncedChangeMaxPrice]);

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder="от" value={minPrice} onChange={handleChangeMinPrice}/>
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder="до" value={maxPrice} onChange={handleChangeMaxPrice}/>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="photocamera" onChange={() => handleChangeCategory(ProductCategory.Photo)} checked={filter.category === ProductCategory.Photo}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="videocamera" onChange={() => handleChangeCategory(ProductCategory.Video)} checked={filter.category === ProductCategory.Video}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Видеокамера</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="digital" onChange={() => handleChangeType(ProductType.Digital)} checked={filter.type ? filter.type.includes(ProductType.Digital) : false}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="film" onChange={() => handleChangeType(ProductType.Film)} checked={filter.type ? filter.type.includes(ProductType.Film) : false} disabled={filter.category === ProductCategory.Video}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Плёночная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="snapshot" onChange={() => handleChangeType(ProductType.Moment)} checked={filter.type ? filter.type.includes(ProductType.Moment) : false} disabled={filter.category === ProductCategory.Video}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Моментальная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="collection" onChange={() => handleChangeType(ProductType.Collection)} checked={filter.type ? filter.type.includes(ProductType.Collection) : false}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Коллекционная</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="zero" onChange={() => handleChangeLevel(ProductLevel.Zero)} checked={filter.level ? filter.level.includes(ProductLevel.Zero) : false}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="non-professional" onChange={() => handleChangeLevel(ProductLevel.Amateur)} checked={filter.level ? filter.level.includes(ProductLevel.Amateur) : false}/><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="professional" onChange={() => handleChangeLevel(ProductLevel.Professional)} checked={filter.level ? filter.level.includes(ProductLevel.Professional) : false} /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset" onChange={handleResetFilter}>Сбросить фильтры
        </button>
      </form>
    </div>

  );
}

export default MainCatalogFilters;
