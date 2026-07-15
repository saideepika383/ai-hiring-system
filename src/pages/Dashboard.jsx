import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />

      <section className="dashboard-page">
        <div className="dashboard-container">

          <h1>Candidate Dashboard</h1>

          <p>
            Welcome to your dashboard. Manage your job applications and profile
            from one place.
          </p>

          <div className="dashboard-cards">

            <div className="dashboard-card">
              <h3>Applied Jobs</h3>
              <p>View all the jobs you have applied for.</p>
            </div>

            <div className="dashboard-card">
              <h3>Saved Jobs</h3>
              <p>Keep track of your favorite job opportunities.</p>
            </div>

            <div className="dashboard-card">
              <h3>Profile</h3>
              <p>Update your personal information and resume.</p>
            </div>

            <div className="dashboard-card">
              <h3>Notifications</h3>
              <p>Receive updates about new jobs and applications.</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;