import Sidebar from "../components/Sidebar";
import "../styles/Candidates.css";

function Candidates() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <div className="page-header">
          <h1>Candidates</h1>
          <button className="add-btn">+ Add Candidate</button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search candidates..."
          />
        </div>

        <table className="candidate-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>Frontend Developer</td>
              <td>2 Years</td>
              <td>Hyderabad</td>
              <td className="active">Available</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Priya Reddy</td>
              <td>React Developer</td>
              <td>3 Years</td>
              <td>Bangalore</td>
              <td className="active">Available</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Arjun Kumar</td>
              <td>UI/UX Designer</td>
              <td>4 Years</td>
              <td>Chennai</td>
              <td className="inactive">Unavailable</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>Sneha Patel</td>
              <td>Backend Developer</td>
              <td>5 Years</td>
              <td>Pune</td>
              <td className="active">Available</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Candidates;