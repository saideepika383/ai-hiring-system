import { Link } from "react-router-dom";
import jobsData from "../data/jobsData";
import "../styles/FeaturedJobs.css";

function FeaturedJobs() {
  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>

      <div className="jobs-container">
        {jobsData.slice(0, 6).map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Job Type:</strong> {job.type}
            </p>

            <Link to="/job-details">
              <button className="apply-btn">Apply Now</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="view-all">
        <Link to="/jobs">
          <button className="view-all-btn">View All Jobs</button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedJobs;