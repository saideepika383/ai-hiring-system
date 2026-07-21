import "../styles/UpcomingInterviews.css";
import {  FaCalendarAlt, FaClock } from "react-icons/fa";

function UpcomingInterviews() {
  return (
    <div className="upcoming-interviews">

      <h2>Upcoming Interviews</h2>

      <div className="interview-list">

        <div className="interview-card">
          <div className="company-logo google">G</div>

          <div className="interview-info">
            <h3>Google</h3>
            <p>Frontend Developer</p>

            <div className="interview-meta">
              <span><FaCalendarAlt /> 22 Jul 2026</span>
              <span><FaClock /> 10:00 AM</span>
            </div>
          </div>

          <button>Join</button>
        </div>

        <div className="interview-card">
          <div className="company-logo microsoft">M</div>

          <div className="interview-info">
            <h3>Microsoft</h3>
            <p>React Developer</p>

            <div className="interview-meta">
              <span><FaCalendarAlt /> 24 Jul 2026</span>
              <span><FaClock /> 2:30 PM</span>
            </div>
          </div>

          <button>View</button>
        </div>

        <div className="interview-card">
          <div className="company-logo amazon">A</div>

          <div className="interview-info">
            <h3>Amazon</h3>
            <p>UI Developer</p>

            <div className="interview-meta">
              <span><FaCalendarAlt /> 25 Jul 2026</span>
              <span><FaClock /> 11:30 AM</span>
            </div>
          </div>

          <button>View</button>
        </div>

      </div>

    </div>
  );
}

export default UpcomingInterviews;