import React from "react";
import { Loading } from "../views/Blog";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Loading", () => {
  test("expect loading panel", () => {
    const { getByText } = render(<Loading />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
