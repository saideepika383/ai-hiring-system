import Sidebar from "../components/Sidebar";
import "../styles/Help.css";

function Help() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Help & Support</h1>
        <p className="subtitle">
          Welcome to the JobPortal Help Center. Find answers below.
        </p>

        <div className="help-container">

          <div className="help-box">
            <h3>📌 Frequently Asked Questions</h3>

            <h4>How do I post a job?</h4>
            <p>Go to Jobs page and click <b>Add New Job</b>.</p>

            <h4>How do I add candidates?</h4>
            <p>Navigate to Candidates page and click <b>Add Candidate</b>.</p>

            <h4>How do I schedule interviews?</h4>
            <p>Go to Interviews page and click <b>Schedule Interview</b>.</p>

            <h4>How do I change my password?</h4>
            <p>Open Settings page and update your password.</p>

          </div>

          <div className="help-box">
            <h3>📞 Contact Support</h3>

            <p><b>Email:</b> support@jobportal.com</p>
            <p><b>Phone:</b> +91 9876543210</p>
            <p><b>Working Hours:</b> Monday - Friday</p>
            <p><b>Time:</b> 9:00 AM - 6:00 PM</p>

            <button className="contact-btn">
              Contact Support
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Help;