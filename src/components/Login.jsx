import { useState } from "react";
import api from "../api/api";
import "../styles/Login.css";


function Login({ onSignupClick, onHomeClick, onLoginSuccess }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      alert("Login Successful ✅");


      // Save Token
      localStorage.setItem("token", res.data.token);

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      console.log(res.data);

      // Home page ki redirect
      if (onLoginSuccess) {
        onLoginSuccess();
      }

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="container">

      <div className="card">

        <h1 className="login-title">
          Welcome Back
        </h1>

        <p className="login-subtitle">
          Please enter your details to sign in
        </p>

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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <span
            style={{
              color: "blue",
              cursor: "pointer"
            }}
          >
            Forgot Password?
          </span>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="bottom-text">
          Don't have an account?{" "}
          <span
            onClick={onSignupClick}
            style={{
              color: "blue",
              cursor: "pointer"
            }}
          >
            Sign Up
          </span>
        </p>

        <br />

        <button
          className="home-btn"
          onClick={onHomeClick}
        >
          ⬅️ Back to Home
        </button>

      </div>

    </div>
  );
}

export default Login;