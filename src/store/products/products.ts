import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SortBy, SortOrder, Products } from '../../types/state';
import { filterAndSortCards, searchCards, setProductCards } from '../actions';
import { ProductCategory, ProductType } from '../../enums';
import { Product } from '../../types/product';
import { fetchAllProductsAction } from '../api-actions';

export const DEFAULT_SORTING = {
  by: SortBy.None,
  order: SortOrder.None
};

export const DEFAULT_FILTER = {
  category: undefined,
  level: undefined,
  type: undefined,
  minPrice: 0,
  maxPrice: 0,
};

export const initialState: Products = {
  isAllProductsLoading: false,
  originalProducts: [],
  allProducts: [],
  searchProducts: [],
  sorting: {
    ...DEFAULT_SORTING
  },
  filter: {
    ...DEFAULT_FILTER
  }
};


export const products = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setProductCards, (state, action) => {
        state.originalProducts = action.payload;
        state.allProducts = action.payload;
        if (action.payload.length) {
          const {minPrice, maxPrice} = getMinMaxPrice(action.payload);
          state.filter.minPrice = minPrice;
          state.filter.maxPrice = maxPrice;
        } else {
          state.filter.minPrice = 0;
          state.filter.maxPrice = 0;
        }
      })
      .addCase(searchCards, (state, action) => {
        state.searchProducts = state.allProducts.filter((card) => card.name.toLowerCase().includes(action.payload.toLocaleLowerCase()));
      })
      .addCase(filterAndSortCards, (state, action) => {
        let newAllProducts = [...state.originalProducts];

        // first filter

        state.filter = {
          ...state.filter,
          ...action.payload.filter,
        };

        const hasPriceFilter = action.payload.filter?.maxPrice || action.payload.filter?.minPrice;
        if (hasPriceFilter) {
          const allProductsMinMax = getMinMaxPrice(state.originalProducts);
          if (state.filter.minPrice < 0 || state.filter.maxPrice < 0) {
            if (state.filter.minPrice < 0) {
              state.filter.minPrice = allProductsMinMax.minPrice;
            }

            if (state.filter.maxPrice < 0) {
              state.filter.maxPrice = allProductsMinMax.maxPrice;
            }
          }

          if (state.filter.minPrice < allProductsMinMax.minPrice) {
            state.filter.minPrice = allProductsMinMax.minPrice;
          }

          if (state.filter.maxPrice > allProductsMinMax.maxPrice) {
            state.filter.maxPrice = allProductsMinMax.maxPrice;
          }

          if (action.payload.filter?.maxPrice && action.payload.filter?.maxPrice < state.filter.minPrice) {
            state.filter.maxPrice = state.filter.minPrice;
          }

          if (action.payload.filter?.minPrice && action.payload.filter?.minPrice > state.filter.maxPrice) {
            state.filter.minPrice = state.filter.maxPrice;
          }

          newAllProducts = newAllProducts.filter((product) => product.price >= state.filter.minPrice && product.price <= state.filter.maxPrice);
        }

        if (state.filter.category) {
          newAllProducts = newAllProducts.filter((product) => product.category === state.filter.category);
        }

        if (state.filter.level && state.filter.level.length > 0) {
          const filterLevel = state.filter.level;
          newAllProducts = newAllProducts.filter((product) => filterLevel.includes(product.level));
        }

        if (state.filter.type && state.filter.type.length > 0) {
          const filterType = state.filter.category === ProductCategory.Video
            ? state.filter.type.filter((type) => type !== ProductType.Moment && type !== ProductType.Film)
            : state.filter.type;
          newAllProducts = newAllProducts.filter((product) => filterType.includes(product.type));
        }

        // then sort

        state.sorting = {
          ...state.sorting,
          ...action.payload.sorting
        };

        if (state.sorting.by === SortBy.None && state.sorting.order !== SortOrder.None) {
          state.sorting = ({
            ...state.sorting,
            by: SortBy.Price
          });
        } else if (state.sorting.by !== SortBy.None && state.sorting.order === SortOrder.None) {
          state.sorting = ({
            ...state.sorting,
            order: SortOrder.Asc
          });
        }

        if (state.sorting.by === SortBy.Price) {
          if (state.sorting.order === SortOrder.Asc) {
            newAllProducts.sort((productA, productB) => productA.price - productB.price);
          } else {
            newAllProducts.sort((productA, productB) => productB.price - productA.price);
          }
        } else if (state.sorting.by === SortBy.Rating) {
          const mapIdRating = new Map<number, number>();
          for (const {id, reviews} of newAllProducts) {
            if (reviews) {
              const rating = Math.ceil(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length);
              mapIdRating.set(id, rating);
            } else {
              mapIdRating.set(id, 0);
            }
          }
          if (state.sorting.order === SortOrder.Asc) {
            newAllProducts.sort((productA, productB) => (mapIdRating.get(productA.id) ?? 0) - (mapIdRating.get(productB.id) ?? 0));
          } else {
            newAllProducts.sort((productA, productB) => (mapIdRating.get(productB.id) ?? 0) - (mapIdRating.get(productA.id) ?? 0));
          }
        }

        state.allProducts = newAllProducts;

        if (!hasPriceFilter) {
          if (newAllProducts.length) {
            const {minPrice, maxPrice} = getMinMaxPrice(newAllProducts);
            state.filter.minPrice = minPrice;
            state.filter.maxPrice = maxPrice;
          } else {
            state.filter.minPrice = 0;
            state.filter.maxPrice = 0;
          }
        }
      })
      .addCase(fetchAllProductsAction.pending, (state) => {
        state.isAllProductsLoading = true;
      })
      .addCase(fetchAllProductsAction.fulfilled, (state) => {
        state.isAllProductsLoading = false;
      })
      .addCase(fetchAllProductsAction.rejected, (state) => {
        state.isAllProductsLoading = false;
      });
  }
}
);

function getMinMaxPrice(productsArray: Product[]): {minPrice: number; maxPrice: number} {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxPrice = Number.MIN_SAFE_INTEGER;

  for (const product of productsArray) {
    if (product.price < minPrice) {
      minPrice = product.price;
    }
    if (product.price > maxPrice) {
      maxPrice = product.price;
    }
  }

  return {minPrice, maxPrice};
}
