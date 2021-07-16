import reducer, {
  SetPosts,
  SetCommentDetail,
} from "../redux/reducers/PostSlice";

describe("PostSlice", () => {
  const initialState = {
    data: [],
    commentDetail: [],
    userComments: [],
    userDetail: [],
    photoDetail: [],
    postDetail: [],
  };

  const data = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      data: [],
      commentDetail: [],
      userComments: [],
      userDetail: [],
      photoDetail: [],
      postDetail: [],
    });
  });

  test("should contain a list of data", () => {
    const Reducer = reducer(initialState, SetPosts(data));

    expect(Reducer).not.toEqual(initialState);
  });

  test("posts can by empty", () => {
    const Reducer = reducer(initialState, SetPosts([]));

    expect(Reducer).toEqual(initialState);
  });
});

describe("SetCommentDetail", () => {
  test("should do the adding comment", () => {});
});
