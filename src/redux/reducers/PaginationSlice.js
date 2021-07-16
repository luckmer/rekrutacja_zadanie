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

  reducers: {
    Next: (state, action) => {
      const next = action.payload;
      state.page = next;
    },

    Prev: (state, action) => {
      const prev = action.payload;
      state.page = prev;
    },

    MaxPage: (state, action) => {
      const prev = action.payload;
      state.maxPage = prev;
    },

    MinPage: (state, action) => {
      const prev = action.payload;
      state.minPage = prev;
    },

    SetNumber: (state, action) => {
      const number = action.payload;
      state.page = number;
    },

    Restart: (state) => {
      state.page = 1;
      state.limit = 9;
      state.maxPage = 9;
      state.minPage = 0;
    },
  },
});

export const { Next, Prev, SetNumber, MaxPage, MinPage, Restart } =
  PaginationSlice.actions;

export default PaginationSlice.reducer;
