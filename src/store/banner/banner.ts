import { Banners } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { setBanner } from '../actions';

const initialState: Banners = {
  banner: null,
};


export const banner = createSlice({
  name: NameSpace.Banner,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setBanner, (state, action) => {
        state.banner = action.payload;
      });
  }
}
);
