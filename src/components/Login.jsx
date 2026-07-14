import "./../styles/login.css";

function Login({ onSignupClick }) {
  return (
    <div className="container">
      <div className="card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Please enter your details to sign in
        </p>

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button>Login</button>

        <p className="bottom-text">
          Don't have an account?{" "}
          <span onClick={onSignupClick}>Sign Up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;