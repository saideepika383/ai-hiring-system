
import "../styles/RecentJobs.css";


function RecentJobs() {
  return (
    <div className="recent-jobs">
      <h2>Recent Jobs</h2>

      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend Developer</td>
            <td>Google</td>
            <td>Hyderabad</td>
            <td><span className="active">Open</span></td>
          </tr>

          <tr>
            <td>React Developer</td>
            <td>Microsoft</td>
            <td>Bangalore</td>
            <td><span className="active">Open</span></td>
          </tr>

          <tr>
            <td>UI/UX Designer</td>
            <td>Amazon</td>
            <td>Chennai</td>
            <td><span className="closed">Closed</span></td>
          </tr>

          <tr>
            <td>Backend Developer</td>
            <td>Infosys</td>
            <td>Pune</td>
            <td><span className="active">Open</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentJobs;