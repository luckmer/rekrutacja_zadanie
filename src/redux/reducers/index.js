import PaginationSlice from "./PaginationSlice";
import CommentsSlice from "./CommentsSlice";
import { combineReducers } from "redux";
import ButtonSlice from "./ButtonSlice";
import PostSlice from "./PostSlice";

const index = combineReducers({
  pagination: PaginationSlice,
  comment: CommentsSlice,
  buttons: ButtonSlice,
  post: PostSlice,
});

export default index;
