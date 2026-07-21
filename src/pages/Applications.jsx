import Sidebar from "../components/Sidebar";
import "../styles/Applications.css";

function Applications() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <div className="page-header">
          <h1>Applications</h1>
          <button className="add-btn">+ New Application</button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search applications..."
          />
        </div>

        <table className="application-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Job Role</th>
              <th>Company</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>Frontend Developer</td>
              <td>Google</td>
              <td className="pending">Pending</td>
              <td>12 Jul 2026</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Priya Reddy</td>
              <td>React Developer</td>
              <td>Microsoft</td>
              <td className="approved">Approved</td>
              <td>10 Jul 2026</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Arjun Kumar</td>
              <td>UI/UX Designer</td>
              <td>Amazon</td>
              <td className="rejected">Rejected</td>
              <td>08 Jul 2026</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Sneha Patel</td>
              <td>Backend Developer</td>
              <td>Infosys</td>
              <td className="approved">Approved</td>
              <td>05 Jul 2026</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Applications;