import "./GridView.css";
export default function GridView({ users, onUserSelect }) {
  return (
    <div className="grid-container">
      {users.map((user) => (
        <div key={user.id} className="grid-tile">
          <h3 className="tile-title">
            {user.firstName} {user.lastName}
          </h3>
          <p className="tile-email">{user.email}</p>
          <div className="tile-buttons">
            <button className="btn view-btn" onClick={() => onUserSelect(user)}>
              View
            </button>
            <button className="btn flag-btn">Flag</button>
            <button className="btn delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
