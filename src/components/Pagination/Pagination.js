import { useCallback, useMemo } from "react";
import { SetLikes } from "../../redux/reducers/ButtonSlice";
import { fetchUserById } from "../../redux/reducers/PostSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Next,
  MinPage,
  MaxPage,
  Prev,
  SetNumber,
} from "../../redux/reducers/PaginationSlice";

const Pagination = (filterResult) => {
  const likes = useSelector((state) => state.buttons);
  const state = useSelector((state) => state.post.data);
  let { page, limit, maxPage, minPage } = useSelector(
    (state) => state.pagination
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const pageNumbers = [];

  const PAGE = { page, limit, filterResult, pageNumbers };
  const currentItems = CurrentPagination({ ...PAGE });

  const next = () => {
    if (pageNumbers.length > maxPage) {
      const update = (page += 1);
      dispatch(Next(update));
      if (page > maxPage) {
        dispatch(MaxPage(maxPage + limit));
        dispatch(MinPage(minPage + limit));
      }
    }
  };

  const prev = () => {
    if (page - 1 > 1) {
      const update = (page -= 1);
      dispatch(Prev(update));
    }

    if (page % limit === 0) {
      dispatch(MaxPage(maxPage - limit));
      dispatch(MinPage(minPage - limit));
    }
  };

  const setNumber = (number) => dispatch(SetNumber(Number(number)));

  const handleLike = useCallback(
    (id) => {
      if (id) dispatch(SetLikes(id));
    },
    [dispatch]
  );

  const handleFetchId = useCallback(
    (id) => {
      dispatch(fetchUserById(id));
      history.push(`/post/${parseInt(id.id)}`);
    },
    [dispatch, history]
  );

  const PROPS = { prev, pageNumbers, maxPage, minPage, setNumber, page, next };
  return { state, likes, currentItems, handleFetchId, handleLike, PROPS };
};

export default Pagination;

const CurrentPagination = ({ page, limit, filterResult, pageNumbers }) => {
  const length = page * limit;
  const indexOfFirstItem = length - limit;

  const currentItems = useMemo(
    () => filterResult.slice(indexOfFirstItem, length),
    [filterResult, indexOfFirstItem, length]
  );

  const PageLength = Math.ceil(filterResult.length / limit);
  for (let i = 1; i <= PageLength; i++) {
    pageNumbers.push(i);
  }

  return currentItems;
};
