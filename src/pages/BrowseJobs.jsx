import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import jobsData from "../data/jobsData";
import "../styles/BrowseJobs.css";

function BrowseJobs() {
  return (
    <>
      <Header />

      <section className="browse-jobs">
        <div className="browse-container">

          <h1>Browse Jobs</h1>

          <p>
            Explore the latest job opportunities available on Snhoor International.
          </p>

          <div className="browse-grid">
            {jobsData.map((job) => (
              <div className="browse-card" key={job.id}>
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>

                <Link to="/job-details">
                  <button>View Details</button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BrowseJobs;