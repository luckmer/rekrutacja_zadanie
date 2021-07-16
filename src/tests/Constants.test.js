import { posts, comments, photos, users } from "../Api/Constants";

describe("Constants", () => {
  test("expect correct posts link", () => {
    const post = "https://jsonplaceholder.typicode.com/posts";
    expect(posts).toBe(post);
  });

  test("expect correct comments link", () => {
    const comment = "https://jsonplaceholder.typicode.com/comments";
    expect(comments).toBe(comment);
  });

  test("expect correct photos link", () => {
    const photo = "https://jsonplaceholder.typicode.com/photos";
    expect(photos).toBe(photo);
  });

  test("expect correct users link", () => {
    const user = "https://jsonplaceholder.typicode.com/users";
    expect(users).toBe(user);
  });
});
