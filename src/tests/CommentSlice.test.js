import reducer, { SetComments } from "../redux/reducers/CommentsSlice";

describe("commentSlice", () => {
  const initialState = {
    comments: [],
  };

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      comments: [],
    });
  });

  test("set data to comment array", () => {
    const data = [
      { id: 1, name: "one" },
      { id: 2, name: "two" },
      { id: 3, name: "three" },
    ];

    const Reducer = reducer(initialState, SetComments(data));

    expect(Reducer).not.toEqual([]);
  });

  test("comments can by empty", () => {
    const data = [];

    const Reducer = reducer(initialState, SetComments(data));

    expect(Reducer).toEqual({
      comments: [[]],
    });
  });
});
