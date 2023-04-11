const User = ({ user, onDelete }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <span key={quality._id} className={`badge me-1 bg-${quality.color}`}>{quality.name}</span>
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>Удалить</button>
      </td>
    </tr>
  );
};

export default User;