import "./../styles/Footer.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-column">
          <h2>SNHOOR</h2>

          <p>
            Connecting exceptional talent with world-class opportunities.
            Build your career with Snhoor International.
          </p>

          <div className="social-icons">
  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook />
  </a>

  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter />
  </a>
</div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/companies">Companies</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          
        </div>

        {/* For Candidates */}
        <div className="footer-column">
          <h3>FOR CANDIDATES</h3>

          <ul>
            <li><Link to="/browse-jobs">Browse Jobs</Link></li>
            <li><Link to="/resume-builder">Resume Builder</Link></li>
            <li><Link to="/career-advice">Career Advice</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/salary-guide">Salary Guide</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>LEGAL</h3>

          <ul>
           <li><Link to="/privacy-policy">Privacy Policy</Link></li>
           <li><Link to="/terms-of-service">Terms of Service</Link></li>
           <li><Link to="/cookie-policy">Cookie Policy</Link></li>
           <li><Link to="/safety">Safety</Link></li>
           <li><Link to="/accessibility">Accessibility</Link></li>

          </ul>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Snhoor International. All Rights Reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;