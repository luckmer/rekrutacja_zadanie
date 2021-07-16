import { SetCommentDetail } from "../../redux/reducers/PostSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const FormFunction = ({ user, id }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = inputRef.current.value;

    if (data.length >= 1) {
      const result = {
        name: user.name,
        body: data,
        id: Math.random(),
        email: user.email,
        postId: id,
      };
      dispatch(SetCommentDetail(result));
      e.target.reset();
    }
  };

  return { handleSubmit, inputRef };
};

export default FormFunction;
