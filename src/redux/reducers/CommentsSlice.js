import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const CommentsSlice = createSlice({
  name: "comment",

  initialState,

  reducers: {
    SetComments: (state, action) => {
      const comment = action.payload;
      state.comments.push(comment);
    },
  },
});

export const { SetComments } = CommentsSlice.actions;

export default CommentsSlice.reducer;
