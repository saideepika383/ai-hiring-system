import { Link, useSearchParams } from "react-router-dom";
import jobsData from "../data/jobsData";
import "../styles/Jobs.css";

function Jobs() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const location = searchParams.get("location") || "";

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(title.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  return (
    <section className="jobs-page">
      <h2>Available Jobs</h2>

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Job Type:</strong> {job.type}</p>

              <Link to="/job-details">
                <button>Apply Now</button>
              </Link>
            </div>
          ))
        ) : (
          <h3>No jobs found.</h3>
        )}
      </div>
    </section>
  );
}

export default Jobs;