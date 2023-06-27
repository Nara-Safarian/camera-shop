import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { Reviews } from '../../types/state';
import { addReviewToStart, setAllReviews } from '../actions';

const initialState: Reviews = {
  allReviews: [],
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setAllReviews, (state, action) => {
        state.allReviews = action.payload;
      })
      .addCase(addReviewToStart, (state, action) => {
        state.allReviews = [
          action.payload,
          ...state.allReviews
        ];
      });
  }
}
);
