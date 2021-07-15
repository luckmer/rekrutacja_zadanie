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

const PostSlice = createSlice({
  name: "post",

  initialState,

  reducers: {},
});

export default PostSlice.reducer;
