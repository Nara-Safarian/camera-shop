import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getFilter, getSorting } from '../store/products/selectors';
import { useSearchParams } from 'react-router-dom';
import { SortBy } from '../types/state';
import { SortOrder } from '../types/state';
import { filterAndSortCards } from '../store/actions';
import { ProductCategory, ProductLevel, ProductType } from '../enums';

export enum FILTERS_AND_SORTING {
  LTE = 'lte',
  GTE = 'gte',
  BY = 'by',
  ORDER = 'order',
  CATEGORY = 'category',
  LEVEL = 'level',
  TYPE = 'type'
}

const useFilterSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = useAppSelector(getFilter);
  const sorting = useAppSelector(getSorting);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const page = searchParams.get('page');
    const {maxPrice, minPrice, category, level, type} = filter;
    const {by, order} = sorting;
    const newSearchParams = {} as Record<FILTERS_AND_SORTING | 'page', string>;
    if (maxPrice !== undefined) {
      newSearchParams[FILTERS_AND_SORTING.GTE] = maxPrice.toString();
    }
    if (minPrice !== undefined) {
      newSearchParams[FILTERS_AND_SORTING.LTE] = minPrice.toString();
    }
    if (category) {
      newSearchParams[FILTERS_AND_SORTING.CATEGORY] = category.toString();
    }
    if (level !== undefined && level.length) {
      newSearchParams[FILTERS_AND_SORTING.LEVEL] = level.toString();
    }
    if (type !== undefined && type.length) {
      newSearchParams[FILTERS_AND_SORTING.TYPE] = type.toString();
    }
    if (by !== SortBy.None) {
      newSearchParams[FILTERS_AND_SORTING.BY] = by.toString();
    }
    if (order !== SortOrder.None) {
      newSearchParams[FILTERS_AND_SORTING.ORDER] = order.toString();
    }
    if (page) {
      newSearchParams.page = page;
    }
    setSearchParams(newSearchParams);
  }, [filter, sorting, setSearchParams]);

  useEffect(() => {
    const lte = searchParams.get(FILTERS_AND_SORTING.LTE) ?? undefined;
    const gte = searchParams.get(FILTERS_AND_SORTING.GTE) ?? undefined;
    const by = searchParams.get(FILTERS_AND_SORTING.BY) ?? undefined;
    const order = searchParams.get(FILTERS_AND_SORTING.ORDER) ?? undefined;
    const category = searchParams.get(FILTERS_AND_SORTING.CATEGORY) ?? undefined;
    const level = searchParams.get(FILTERS_AND_SORTING.LEVEL) ?? undefined;
    const type = searchParams.get(FILTERS_AND_SORTING.TYPE) ?? undefined;

    dispatch(filterAndSortCards({
      filter: {
        maxPrice: isNaN(Number(gte)) ? undefined : Number(gte),
        minPrice: isNaN(Number(lte)) ? undefined : Number(lte),
        category: category as ProductCategory,
        level: level?.split(',') as ProductLevel[],
        type: type?.split(',') as ProductType[]
      },
      sorting: {
        order: (order ?? SortOrder.None) as SortOrder,
        by: (by ?? SortBy.None) as SortBy
      }
    }));
  }, []);
};

export default useFilterSearch;
