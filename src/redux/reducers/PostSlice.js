import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchIdData from "../../Api/FetchIdData";

const initialState = {
  data: [],
  commentDetail: [],
  userComments: [],
  userDetail: [],
  photoDetail: [],
  postDetail: [],
};

const fetchUserById = createAsyncThunk(
  "videos/addVideo",
  async ({ id, user }) => {
    const data = typeof id === "number" ? id : "";
    const result = FetchIdData(data, user);

    return result;
  }
);

const PostSlice = createSlice({
  name: "post",

  initialState,

  reducers: {
    SetPosts: (state, action) => {
      const posts = action.payload;
      state.data = posts;
    },

    SetCommentDetail: (state, action) => {
      const userPost = action.payload;
      state.userComments.push(userPost);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      const data = action.payload;

      if (action.payload) {
        const { post, photo, comments, user } = data;

        state.commentDetail = comments;
        state.photoDetail = photo;
        state.postDetail = post;
        state.userDetail = user;
      }
    });
  },
});

export { fetchUserById };
export const { SetPosts, SetCommentDetail } = PostSlice.actions;

export default PostSlice.reducer;
