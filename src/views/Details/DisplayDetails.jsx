import { MapComments } from ".";
const DisplayDetails = ({
  post,
  user,
  commentsPanel,
  handleSubmit,
  inputRef,
}) => {
  return (
    <section className="detail_section">
      <div className="detail_card">
        <div className="detail_body">
          <div className="description">
            <header className="Header">
              <h2>{post.title}</h2>
              <div className="header_author">
                <p>
                  by <span>{user.name}</span>
                </p>
              </div>
            </header>
            <div className="description_spacer">
              <span>Context</span>
              <hr />
            </div>
            <p>{post.body}</p>
          </div>
          <footer className="Comments">
            <hr />
            <div className="description_spacer">
              <span>Comments</span>
              <hr />
              <MapComments commentsPanel={commentsPanel} />
            </div>
            <div className="form_panel">
              <form onSubmit={handleSubmit} className="form_card">
                <input type="text" defaultValue="" ref={inputRef} />
                <input type="submit" value="submit" />
              </form>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default DisplayDetails;
