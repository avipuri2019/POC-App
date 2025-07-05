import "./DetailView.css";
export default function DetailView({ user, onBack }) {
  return (
    <div className="detail-view">
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>

      <button
        onClick={onBack}
        className="view-btn"
        style={{ marginTop: "1rem" }}
      >
        Back
      </button>
    </div>
  );
}
