import "./../styles/signup.css";

function Signup({ onLoginClick }) {
  return (
    <div className="container">
      <div className="card">

        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">
          Join us today by completing the form below
        </p>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" />

        <div className="terms">
          <label>
            <input type="checkbox" /> I agree to the Terms & Conditions
          </label>
        </div>

        <button>Create Account</button>

        <p className="bottom-text">
          Already have an account?{" "}
          <span onClick={onLoginClick}>Login</span>
        </p>

      </div>
    </div>
  );
}

export default Signup;