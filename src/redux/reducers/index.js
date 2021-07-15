import { combineReducers } from "redux";
import PostSlice from "./PostSlice";

const index = combineReducers({
  post: PostSlice,
});

export default index;
