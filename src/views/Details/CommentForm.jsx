const CommentForm = (id, userComments, comments) => {
  const ID = parseInt(id);
  const Find = userComments.filter((item) => {
    const Id = parseInt(item.postId);
    return Number(Id === ID);
  });

  const commentsPanel = [...comments, ...Find];
  return commentsPanel;
};

export default CommentForm;
