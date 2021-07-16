import React from "react";

export const CustomButton = (next, pageNumbers, type) => {
  return (
    <button
      value={type}
      onClick={() => next()}
      role="tab"
      aria-selected="true"
      className={
        pageNumbers.length <= 0
          ? "pagination_div_number Off"
          : "pagination_div_number"
      }
    >
      {type}
    </button>
  );
};
