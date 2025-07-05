import { FaThLarge, FaThList } from "react-icons/fa";
import "./ViewToggle.css";

const ViewToggle = ({ view, setView }) => {
  return (
    <div className="view-toggle">
      <button
        className={`view-btn ${view === "grid" ? "active" : ""}`}
        onClick={() => setView("grid")}
        title="Grid View"
      >
        <FaThLarge />
      </button>
      <button
        className={`view-btn ${view === "tile" ? "active" : ""}`}
        onClick={() => setView("tile")}
        title="List View"
      >
        <FaThList />
      </button>
    </div>
  );
};

export default ViewToggle;
