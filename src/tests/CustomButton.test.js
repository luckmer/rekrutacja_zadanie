import React from "react";
import { CustomButton } from "../components/Pagination/CustomButton";
import { render } from "@testing-library/react";

describe("CustomButton", () => {
  test("should render CustomButton", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click Me</CustomButton>);
  });
});
