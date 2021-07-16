import { FormFunction, DisplayDetails, CommentForm } from ".";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../Blog/index";
import "../../css/Details.css";

const Details = () => {
  const { id } = useParams();
  const { commentDetail, postDetail, userDetail, userComments } = useSelector(
    (state) => state.post
  );

  const comments = commentDetail;
  const post = postDetail;
  const user = userDetail;

  if (Object.keys(post).length === 0) {
    return <Redirect to="" />;
  }

  const DETAIL = { user, id };

  const { handleSubmit, inputRef } = FormFunction({ ...DETAIL });
  const commentsPanel = CommentForm(id, userComments, comments);

  const PROPS = { post, user, commentsPanel, handleSubmit, inputRef };

  return post.length <= 0 ? <Loading /> : <DisplayDetails {...PROPS} />;
};

export default Details;
