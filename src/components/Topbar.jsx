import "../styles/Topbar.css";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaCog,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaBriefcase
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "" || location.trim() !== "") {
      navigate("/jobs");
    }
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setShowMessage(false);
    setShowProfile(false);
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
    setShowNotification(false);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowNotification(false);
    setShowMessage(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="topbar">

      <div className="topbar-header">

        <div className="topbar-left">
          <h2>
            Good Morning, Harini! 👋
          </h2>

          <p>
            Here's what's happening with your hiring dashboard today.
          </p>
        </div>

        <div className="topbar-right">

          <div className="icon-box" onClick={toggleNotification}>
            <FaBell />
            <span className="badge">5</span>

            {showNotification && (
              <div className="dropdown">
                <p>🟢 New candidate applied</p>
                <p>📅 Interview scheduled</p>
                <p>💼 New job posted</p>
              </div>
            )}
          </div>

          <div className="icon-box" onClick={toggleMessage}>
            <FaEnvelope />
            <span className="badge">8</span>

            {showMessage && (
              <div className="dropdown">
                <p>Harish: Interview Request</p>
                <p>Rahul: Resume Uploaded</p>
                <p>Sneha: Thank You</p>
              </div>
            )}
          </div>

          <div className="icon-box" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>

          <div
            className="icon-box"
            onClick={() => navigate("/settings")}
          >
            <FaCog />
          </div>

          <div className="profile" onClick={toggleProfile}>

            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="profile"
            />

            <div className="profile-info">
              <h4>Harini</h4>
              <span>Administrator</span>
            </div>

            <FaChevronDown className="profile-arrow" />

            {showProfile && (
              <div className="dropdown profile-dropdown">

                <p onClick={() => navigate("/profile")}>
                  👤 My Profile
                </p>

                <p onClick={() => navigate("/settings")}>
                  ⚙️ Account Settings
                </p>

                <p onClick={() => navigate("/login")}>
                  🚪 Logout
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

      <div className="hero-search">

        <h1>
          Find Your Dream Job Today
        </h1>

        <div className="search-box">

          <div className="search-field">
            <input
              type="text"
              placeholder="Job title, keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>

          <div className="search-divider"></div>

          <div className="search-field">
            <input
              type="text"
              placeholder="Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>

          <button onClick={handleSearch}>
            <FaSearch />
          </button>

        </div>

      </div>

      <button
        className="post-job-btn"
        onClick={() => navigate("/jobs")}
      >
        <FaBriefcase />
        Post a Job
      </button>

    </header>
  );
}

export default Topbar;