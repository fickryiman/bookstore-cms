import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

// console.log(categorySlice);

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
