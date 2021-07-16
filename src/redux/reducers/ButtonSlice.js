import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Likes: [],
  start: false,
};

const ButtonSlice = createSlice({
  name: "buttons",

  initialState,

  reducers: {
    SetLikes: (state, action) => {
      const data = action.payload;
      const check = state.Likes.every((item) => item !== data);

      if (check) {
        state.Likes.push(data);
      } else {
        const Clear = state.Likes.filter((item) => item !== data);
        state.Likes = Clear;
      }
    },

    SetFilterLike: (state, action) => {
      const FilterStatus = action.payload;
      state.start = FilterStatus;
    },
  },
});

export const { SetLikes, SetFilterLike } = ButtonSlice.actions;

export default ButtonSlice.reducer;
