const MapComments = ({ commentsPanel }) => {
  return (
    <div className="comments_container">
      {commentsPanel.map(({ name, body, id, email }) => (
        <div key={id} className="comments_card">
          <div className="comments_user">
            <h3>{name}</h3>
            <span>{email}</span>
          </div>
          <div>
            <p>{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapComments;
