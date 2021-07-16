import { memo } from "react";

const DisplayBlog = ({ currentItems, likes, handleFetchId, handleLike }) => {
  return currentItems.map(({ body, id, title, userId }) => {
    const Color = likes.Likes.includes(id);
    return (
      <div key={id} className="article_col">
        <div className="article_card">
          <div className="article_body">
            <div className="article_header">
              <p>{title.length > 20 ? `${title.substr(0, 20)} ...` : title}</p>
            </div>
            <div>{body.length > 88 ? `${body.substr(0, 88)} ...` : body}</div>
            <div className="article_panel">
              <div onClick={() => handleFetchId({ id: id, user: userId })}>
                <button className="article_panel_off">Read More</button>
              </div>
              <button
                onClick={() => handleLike(id)}
                className={Color ? "article_panel_on" : "article_panel_off"}
              >
                favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default memo(DisplayBlog);
