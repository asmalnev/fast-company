const Bookmark = ({ status, onToggleBookmark, id }) => {
  return (
    <button className="btn" onClick={() => onToggleBookmark(id)}>
      <i className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}></i>
    </button>
  );
};

export default Bookmark;
