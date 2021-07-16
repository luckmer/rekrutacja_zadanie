import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const CommentsSlice = createSlice({
  name: "comment",

  initialState,

  reducers: {},
});

export default CommentsSlice.reducer;
