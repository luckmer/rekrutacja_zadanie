import { Pages, Pagination } from "../../components/Pagination/index";
import { Restart } from "../../redux/reducers/PaginationSlice";
import { Loading, DisplayBlog } from "./index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../css/Pagination.css";
import "../../css/BlogView.css";

const Blog = () => {
  const [filterResult, setFilterResult] = useState([]);
  const { state, likes, currentItems, handleFetchId, handleLike, PROPS } =
    Pagination(filterResult);

  const dispatch = useDispatch();

  useEffect(() => {
    let filterS = state.slice();
    if (likes.start) {
      filterS = filterS.filter((item) => likes.Likes.includes(item.id));
      dispatch(Restart());
    }
    setFilterResult(filterS);
  }, [state, likes, setFilterResult]);

  const BLOG = { currentItems, likes, handleFetchId, handleLike };

  return (
    <section className="Blog_Container">
      <div className="Blog_Header">
        <h3>Recent Posts</h3>
        <hr />
      </div>
      <div className="article_section">
        {currentItems.length <= 0 ? <Loading /> : <DisplayBlog {...BLOG} />}
      </div>
      <Pages {...PROPS} />
    </section>
  );
};

export default Blog;
