import { CommentForm } from "../views/Details/index";

describe("DetailsFunctions", () => {
  const Comments = [
    {
      body: "description",
      email: "Eliseo@gardner.biz",
      id: 1,
      name: "id labore ex et quam laborum",
      postId: 1,
    },
  ];

  const UserPost = [
    {
      body: "text",
      email: "Sincere@april.biz",
      id: 0.7062635675164963,
      name: "Leanne Graham",
      postId: "1",
    },
    {
      body: "second text",
      email: "Sincere@april.biz",
      id: 0.7062635675164963,
      name: "Leanne Graham",
      postId: "1",
    },

    {
      body: "different post",
      email: "Sincere@april.biz",
      id: 0.7062635675164963,
      name: "Leanne Graham",
      postId: "2",
    },
    {
      body: "second different post",
      email: "Sincere@april.biz",
      id: 0.7062635675164963,
      name: "Leanne Graham",
      postId: "2",
    },
  ];

  test("expect correct result with length 5", () => {
    const user = UserPost;
    const id = Comments;
    const filterId = 1;
    const result = CommentForm(filterId, id, user);
    expect(result).toHaveLength(5);
  });

  test("user's postings can be empty", () => {
    const user = [];
    const id = Comments;
    const filterId = 1;
    const result = CommentForm(filterId, id, user);
    expect(result).toHaveLength(1);
  });

  test("both arrays can be empty", () => {
    const user = [];
    const id = [];
    const filterId = 1;
    const result = CommentForm(filterId, id, user);
    expect(result).toEqual([]);
  });
});
