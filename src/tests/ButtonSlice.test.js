import reducer, {
  SetLikes,
  SetFilterLike,
} from "../redux/reducers/ButtonSlice";

describe("ButtonSlice", () => {
  const initialState = {
    Likes: [],
    start: false,
  };

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      Likes: [],
      start: false,
    });
  });

  test("add possible like", () => {
    const SetLike = reducer(initialState, SetLikes(1));
    expect(SetLike).toEqual({ Likes: [1], start: false });
  });

  test("likes have to be different", () => {
    const SetLike = reducer(initialState, SetLikes(1));
    expect(SetLike).toEqual({ Likes: [1], start: false });
  });

  test("expect more likes than one", () => {
    const SetLike = reducer(initialState, SetLikes(2));
    expect(SetLike).toEqual({ Likes: [2], start: false });
  });
});

describe("SetFilterLike", () => {
  const initialState = {
    Likes: [],
    start: false,
  };

  test("expect false and block filter", () => {
    const SetStatus = reducer(initialState, SetFilterLike(false));

    expect(SetStatus).toEqual({
      Likes: [],
      start: false,
    });
  });

  test("expect true and turn on filter", () => {
    const SetStatus = reducer(initialState, SetFilterLike(true));

    expect(SetStatus).toEqual({
      Likes: [],
      start: true,
    });
  });
});
