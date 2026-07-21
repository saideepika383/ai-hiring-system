import Sidebar from "../components/Sidebar";
import "../styles/Interviews.css";

function Interviews() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <div className="interviews-page">
          <div className="header">
            <h1>Interviews</h1>
            <button>+ Schedule Interview</button>
          </div>

          <input
            type="text"
            placeholder="Search interviews..."
            className="search-box"
          />

          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Job Role</th>
                <th>Date</th>
                <th>Time</th>
                <th>Interviewer</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>Frontend Developer</td>
                <td>20 Jul 2026</td>
                <td>10:00 AM</td>
                <td>John</td>
                <td className="scheduled">Scheduled</td>
              </tr>

              <tr>
                <td>Priya Reddy</td>
                <td>React Developer</td>
                <td>21 Jul 2026</td>
                <td>11:30 AM</td>
                <td>David</td>
                <td className="completed">Completed</td>
              </tr>

              <tr>
                <td>Arjun Kumar</td>
                <td>UI/UX Designer</td>
                <td>22 Jul 2026</td>
                <td>2:00 PM</td>
                <td>Sarah</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Sneha Patel</td>
                <td>Backend Developer</td>
                <td>23 Jul 2026</td>
                <td>4:00 PM</td>
                <td>Michael</td>
                <td className="scheduled">Scheduled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Interviews;