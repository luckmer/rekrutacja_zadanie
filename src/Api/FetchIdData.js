import { comments, photos, posts, users } from "./Constants";
import fetch from "node-fetch";

const FetchIdData = async (id, user) => {
  if (id === "") return;

  const Posts = await fetch(`${posts}/${id}`);
  const Users = await fetch(`${users}/${user}`);
  const Comments = await fetch(`${comments}`);
  const Photos = await fetch(photos);

  const comment = await Comments.json();
  const post = await Posts.json();
  const data = await Photos.json();
  const userS = await Users.json();

  const postPhoto = data.filter((item) => Number(item.id === id));
  const commentList = comment.filter((item) =>
    Number(item.postId === parseInt(id))
  );

  const result = { post, photo: postPhoto, comments: commentList, user: userS };

  return result;
};

export default FetchIdData;
