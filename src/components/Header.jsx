import "../styles/Header.css";

function Header({ onLoginClick, onSignupClick }) {
  return (
    <header className="header">

      <div className="logo">
        <h2>SNHOOR International</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="auth-buttons">

        <button 
          className="login-btn"
          onClick={onLoginClick}
        >
          Login
        </button>

        <button 
          className="register-btn"
          onClick={onSignupClick}
        >
          Register
        </button>

      </div>

    </header>
  );
}

export default Header;