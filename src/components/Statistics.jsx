import "../styles/Statistics.css";
import {
  FaUsers,
  FaBriefcase,
  FaFileAlt,
  FaAward
} from "react-icons/fa";

function Statistics() {
  return (
    <div className="statistics">

      <h2>Statistics Overview</h2>

      <div className="stats-grid">

        <div className="stat-box">
          <FaUsers className="stat-icon blue" />
          <h3>12,540</h3>
          <p>Total Users</p>
          <span>+12% this month</span>
        </div>

        <div className="stat-box">
          <FaBriefcase className="stat-icon green" />
          <h3>245</h3>
          <p>Active Jobs</p>
          <span>+8% this month</span>
        </div>

        <div className="stat-box">
          <FaFileAlt className="stat-icon orange" />
          <h3>8,430</h3>
          <p>Applications</p>
          <span>+18% this month</span>
        </div>

        <div className="stat-box">
          <FaAward className="stat-icon purple" />
          <h3>310</h3>
          <p>Placements</p>
          <span>+5% this month</span>
        </div>

      </div>

    </div>
  );
}

export default Statistics;