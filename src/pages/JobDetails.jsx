import "../styles/JobDetails.css";

function JobDetails() {
  return (
    <div className="job-details">
      <h2>Frontend Developer</h2>

      <h3>Company</h3>
      <p>SNHOOR International</p>

      <h3>Location</h3>
      <p>Hyderabad</p>

      <h3>Job Type</h3>
      <p>Full Time</p>

      <h3>Job Description</h3>
      <p>
        We are looking for a React Frontend Developer with knowledge of HTML,
        CSS, JavaScript, and React.js.
      </p>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
}

export default JobDetails;