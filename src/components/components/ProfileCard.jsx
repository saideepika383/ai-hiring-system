import { useNavigate } from "react-router-dom";
import "../styles/ProfileCard.css";

function ProfileCard() {
  const navigate = useNavigate();

  return (
    <div className="profile-card">

      <img
        src="https://i.pravatar.cc/150?img=32"
        alt="Profile"
      />

      <h3>Harini Reddy</h3>
      <p>Frontend Developer</p>

      <div className="profile-details">

        <div>
          <h4>43</h4>
          <span>Applied</span>
        </div>

        <div>
          <h4>27</h4>
          <span>Interviews</span>
        </div>

        <div>
          <h4>12</h4>
          <span>Offers</span>
        </div>

      </div>

      <button onClick={() => navigate("/edit-profile")}>
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileCard;