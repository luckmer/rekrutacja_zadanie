import FetchIdData from "../Api/FetchIdData";

describe("FetchApi", () => {
  test("expect data inside of FetchIdData", async () => {
    const id = 1;
    const user = 1;
    const data = await FetchIdData(id, user);
    expect(data).not.toEqual([]);
  });
});
