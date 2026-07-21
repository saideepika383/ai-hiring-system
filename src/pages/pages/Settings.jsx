import Sidebar from "../components/Sidebar";
import "../styles/Settings.css";

function Settings() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <div className="settings-page">

          <h1>Settings</h1>

          <div className="settings-card">

            <h2>Profile Information</h2>

            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />

            <label>New Password</label>
            <input type="password" placeholder="Enter new password" />

            <div className="checkbox">
              <input type="checkbox" />
              <span>Enable Email Notifications</span>
            </div>

            <div className="checkbox">
              <input type="checkbox" />
              <span>Enable Dark Mode</span>
            </div>

            <button className="save-btn">Save Changes</button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;