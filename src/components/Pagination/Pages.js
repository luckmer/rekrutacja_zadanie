import { CustomButton } from "./CustomButton";

const Pages = ({
  prev,
  pageNumbers,
  maxPage,
  minPage,
  setNumber,
  page,
  next,
}) => {
  return (
    <section className="pagination_section">
      {CustomButton(prev, pageNumbers, "<")}
      {pageNumbers.map((number) => {
        if (number < maxPage + 1 && number > minPage) {
          return (
            <div key={number} className="pagination_div_number">
              <p
                onClick={() => setNumber(number)}
                value={number}
                className={`pagination_div_number ${
                  page === number ? "active" : "off"
                }`}
              >
                {number}
              </p>
            </div>
          );
        }
        return "";
      })}
      {CustomButton(next, pageNumbers, ">")}
    </section>
  );
};

export default Pages;
