import "../styles/DashboardCards.css";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaUsers,
  FaEye,
  FaArrowUp,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function DashboardCards() {
  const navigate = useNavigate();

  return (
    <div className="cards">

      <div
        className="card green"
        onClick={() => navigate("/applications")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-text">
          <p>Applications</p>
          <h2>43</h2>
          <span className="trend">
            <FaArrowUp /> +12% this month
          </span>
        </div>

        <div className="card-icon">
          <FaBriefcase />
        </div>
      </div>

      <div
        className="card blue"
        onClick={() => navigate("/interviews")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-text">
          <p>Interviews</p>
          <h2>27</h2>
          <span className="trend">
            <FaArrowUp /> +8% this week
          </span>
        </div>

        <div className="card-icon">
          <FaCalendarAlt />
        </div>
      </div>

      <div
        className="card orange"
        onClick={() => navigate("/profile")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-text">
          <p>Profile Views</p>
          <h2>52K</h2>
          <span className="trend">
            <FaArrowUp /> +20%
          </span>
        </div>

        <div className="card-icon">
          <FaEye />
        </div>
      </div>

      <div
        className="card purple"
        onClick={() => navigate("/candidates")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-text">
          <p>Candidates</p>
          <h2>120</h2>
          <span className="trend">
            <FaArrowUp /> +15%
          </span>
        </div>

        <div className="card-icon">
          <FaUsers />
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;