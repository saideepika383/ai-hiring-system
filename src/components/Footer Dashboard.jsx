import "../styles/Footer Dashboard.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">

      <span className="copyright">
        © 2026 Job Portal Dashboard
      </span>

      <a href="#dashboard">Dashboard</a>
      <a href="#jobs">Jobs</a>
      <a href="#companies">Companies</a>
      <a href="#contact-info">Contact</a>

      <FaLinkedin
        className="social-icon"
        onClick={() => navigate("/login")}
      />

      <FaInstagram
        className="social-icon"
        onClick={() => navigate("/login")}
      />

      <FaTwitter
        className="social-icon"
        onClick={() => navigate("/login")}
      />

    </footer>
  );
}

export default Footer;