import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    bookSlice,
    categoriesReducer,
  },
});

export default store;
