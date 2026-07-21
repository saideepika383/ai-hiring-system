import { useState } from "react";
import "./../styles/EditProfile.css";

function EditProfile() {
  const [name, setName] = useState("Harini Reddy");
  const [email, setEmail] = useState("harini@gmail.com");
  const [phone, setPhone] = useState("9876543210");
  const [role, setRole] = useState("Frontend Developer");

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">

        <h2>Edit Profile</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button onClick={handleSave}>
          Save Changes
        </button>

      </div>
    </div>
  );
}

export default EditProfile;