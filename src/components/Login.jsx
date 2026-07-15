import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
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
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
        />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

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
      </div>
    </div>
  );
}

export default Login;