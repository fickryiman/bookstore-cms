import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "Under construction",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
});

console.log(categorySlice);

export default categorySlice.reducer;
