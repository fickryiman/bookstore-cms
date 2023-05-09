import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
});

console.log(bookSlice);

export default bookSlice.reducer;
