import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 9,
  maxPage: 9,
  minPage: 0,
};

const PaginationSlice = createSlice({
  name: "pagination",
  initialState,

  reducers: {},
});

export default PaginationSlice.reducer;
