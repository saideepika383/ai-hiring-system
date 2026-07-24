import "../styles/DashboardHeader.css";
import {
  FaBars,
  FaSearch,
  FaComments,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="dashboard-header">

      <div className="header-left">
        <FaBars className="menu-icon" />
        <h2>Dashboard</h2>
      </div>

      <div className="header-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search something here..."
        />
      </div>

      <div className="header-right">

        {/* Messages */}

        <div
          className="icon-circle"
          onClick={() => {
            setShowMessage(!showMessage);
            setShowNotification(false);
            setShowProfile(false);
          }}
        >
          <FaComments />
          <span className="badge">2</span>

          {showMessage && (
            <div className="dropdown">
              <p>Harish : Interview Request</p>
              <p>Rahul : Resume Uploaded</p>
              <p>Sneha : Thank You</p>
            </div>
          )}
        </div>

        {/* Notifications */}

        <div
          className="icon-circle"
          onClick={() => {
            setShowNotification(!showNotification);
            setShowMessage(false);
            setShowProfile(false);
          }}
        >
          <FaBell />
          <span className="badge">17</span>

          {showNotification && (
            <div className="dropdown">
              <p>New Candidate Applied</p>
              <p>Interview Scheduled</p>
              <p>Job Posted Successfully</p>
            </div>
          )}
        </div>

        {/* Profile */}

        <div
          className="profile-box"
          onClick={() => {
            setShowProfile(!showProfile);
            setShowMessage(false);
            setShowNotification(false);
          }}
        >
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="profile"
          />

          <div className="profile-text">
            <h4>Harini</h4>
            <p>Administrator</p>
          </div>

          <FaChevronDown />

          {showProfile && (
            <div className="dropdown profile-dropdown">

              <p onClick={() => navigate("/profile")}>
                👤 My Profile
              </p>

              <p onClick={() => navigate("/settings")}>
                ⚙️ Settings
              </p>

              <p onClick={() => navigate("/login")}>
                🚪 Logout
              </p>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default DashboardHeader;