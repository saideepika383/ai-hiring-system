import "../styles/Jobs.css";

function Jobs() {
  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1>Jobs</h1>
        <button className="add-job-btn">+ Add New Job</button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search jobs..."
        />
      </div>

      <table className="jobs-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend Developer</td>
            <td>Google</td>
            <td>Hyderabad</td>
            <td><span className="open">Open</span></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>React Developer</td>
            <td>Microsoft</td>
            <td>Bangalore</td>
            <td><span className="open">Open</span></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>UI/UX Designer</td>
            <td>Amazon</td>
            <td>Chennai</td>
            <td><span className="closed">Closed</span></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>Backend Developer</td>
            <td>Infosys</td>
            <td>Pune</td>
            <td><span className="open">Open</span></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;