import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import "../styles/Login.css";

function Signup({ onLoginClick }) {

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    if (!full_name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await api.post("/auth/register", {
        full_name,
        email,
        password,
      });

      alert("Registration Successful ✅");

      console.log(res.data);

      if (onLoginClick) {
        onLoginClick();
      }

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }
  };

  return (
    <div className="container">

      <div className="card">

        <h1 className="login-title">
          Create Account
        </h1>

        <p className="login-subtitle">
          Register for AI Hiring System
        </p>

        <label>Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <p className="bottom-text">
          Already have an account?{" "}
          <span
            onClick={onLoginClick}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Login
          </span>
        </p>

        <br />

        <Link to="/">
          <button className="home-btn">
            ⬅️ Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Signup;