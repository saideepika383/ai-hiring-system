import "../styles/QuickActions.css";
import {
  FaPlus,
  FaUsers,
  FaCalendarAlt,
  FaFileDownload
} from "react-icons/fa";

function QuickActions() {
  return (
    <div className="quick-actions">

      <h2>Quick Actions</h2>

      <button>
        <FaPlus /> Post New Job
      </button>

      <button>
        <FaUsers /> View Candidates
      </button>

      <button>
        <FaCalendarAlt /> Schedule Interview
      </button>

      <button>
        <FaFileDownload /> Download Report
      </button>

    </div>
  );
}

export default QuickActions;