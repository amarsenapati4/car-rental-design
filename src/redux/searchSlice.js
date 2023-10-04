// src/redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: [], // Initial data
  },
  reducers: {
    storeSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { storeSearchData } = searchSlice.actions;

export default searchSlice.reducer;
