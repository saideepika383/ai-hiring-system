<<<<<<< HEAD
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
=======
import { useState } from "react";
import "./../styles/login.css";

function Login({ onSignupClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async () => {
  console.log("Login button clicked");

  try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful");
        console.log(data);

        
        
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

>>>>>>> e989f09 (Integrated landing page and login)
  return (
    <div className="container">
      <div className="card">
        <h1 className="login-title">Welcome Back</h1>

        <p className="login-subtitle">
          Please enter your details to sign in
        </p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
<<<<<<< HEAD
=======
          value={email}
          onChange={(e) => setEmail(e.target.value)}
>>>>>>> e989f09 (Integrated landing page and login)
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
<<<<<<< HEAD
=======
          value={password}
          onChange={(e) => setPassword(e.target.value)}
>>>>>>> e989f09 (Integrated landing page and login)
        />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

<<<<<<< HEAD
        <button className="login-btn">Login</button>

        <p className="bottom-text">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

        <br />

        <Link to="/">
          <button className="home-btn">
            ⬅️ Back to Home
          </button>
        </Link>
=======
        <button onClick={handleLogin}>Login</button>

        <p className="bottom-text">
          Don't have an account?{" "}
          <span
            onClick={onSignupClick}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Sign Up
          </span>
        </p>
>>>>>>> e989f09 (Integrated landing page and login)
      </div>
    </div>
  );
}

export default Login;