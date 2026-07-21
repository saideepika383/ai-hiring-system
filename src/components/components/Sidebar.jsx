import {
  FaHome,
  FaBriefcase,
  FaUsers,
  FaChartBar,
  FaCalendarAlt,
  FaFileAlt,
  FaCog,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      navigate("/login");
    }
  };

  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <h2>JobPortal</h2>
        <p>Admin Dashboard</p>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">

        <li>
          <Link to="/">
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/jobs">
            <FaBriefcase />
            <span>Jobs</span>
          </Link>
        </li>

        <li>
          <Link to="/candidates">
            <FaUsers />
            <span>Candidates</span>
          </Link>
        </li>

        <li>
          <Link to="/applications">
            <FaFileAlt />
            <span>Applications</span>
          </Link>
        </li>

        <li>
          <Link to="/analytics">
            <FaChartBar />
            <span>Analytics</span>
          </Link>
        </li>

        <li>
          <Link to="/interviews">
            <FaCalendarAlt />
            <span>Interviews</span>
          </Link>
        </li>

        <li>
          <Link to="/settings">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>

        <li onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
          <FaMoon />
          <span>Dark Mode</span>
        </li>

        

      </ul>

      {/* Logout */}
      <div
        className="logout"
        onClick={handleLogout}
        style={{ cursor: "pointer" }}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </div>

    </div>
  );
}

export default Sidebar;