import Sidebar from "../components/Sidebar";
import "../styles/Analytics.css";

function Analytics() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <div className="analytics-page">
          <h1>Analytics</h1>

          <div className="analytics-cards">
            <div className="card">
              <h3>Total Jobs</h3>
              <p>48</p>
            </div>

            <div className="card">
              <h3>Total Candidates</h3>
              <p>320</p>
            </div>

            <div className="card">
              <h3>Applications</h3>
              <p>560</p>
            </div>

            <div className="card">
              <h3>Interviews</h3>
              <p>82</p>
            </div>
          </div>

          <div className="analytics-table">
            <h2>Monthly Report</h2>

            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Jobs Posted</th>
                  <th>Applications</th>
                  <th>Interviews</th>
                  <th>Hired</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>January</td>
                  <td>8</td>
                  <td>75</td>
                  <td>20</td>
                  <td>5</td>
                </tr>

                <tr>
                  <td>February</td>
                  <td>10</td>
                  <td>92</td>
                  <td>25</td>
                  <td>7</td>
                </tr>

                <tr>
                  <td>March</td>
                  <td>12</td>
                  <td>110</td>
                  <td>31</td>
                  <td>9</td>
                </tr>

                <tr>
                  <td>April</td>
                  <td>15</td>
                  <td>130</td>
                  <td>36</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;