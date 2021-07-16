import { useEffect } from "react";
import { SetComments } from "../redux/reducers/CommentsSlice";
import { SetPosts } from "../redux/reducers/PostSlice";
import { posts, comments } from "./Constants";
import { useDispatch } from "react-redux";

const FetchApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPosts() {
      if (typeof posts !== "string") return;
      const response = await fetch(posts);

      const data = await response.json();
      dispatch(SetPosts(data));
    }

    fetchPosts();
  }, [dispatch]);

  useEffect(() => {
    async function fetchComments() {
      if (typeof comments !== "string") return;
      const response = await fetch(comments);

      const data = await response.json();
      dispatch(SetComments(data));
    }

    fetchComments();
  }, [dispatch]);
};

export default FetchApi;
