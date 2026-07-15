import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Header */}
      <header className="navbar">
        <h2 className="logo">Resume Screening</h2>

        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Resume Screening System</h1>

        <p>
          Upload resumes, screen candidates, manage hiring,
          and recruit the best talent faster.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">

        <div className="card">
          <h3>📄 Resume Upload</h3>
          <p>Upload resumes quickly and securely.</p>
        </div>

        <div className="card">
          <h3>🤖 AI Screening</h3>
          <p>Automatically analyze candidate resumes.</p>
        </div>

        <div className="card">
          <h3>👥 Candidates</h3>
          <p>Manage all candidates in one place.</p>
        </div>

        <div className="card">
          <h3>📊 Reports</h3>
          <p>View hiring reports and analytics.</p>
        </div>

      </section>

      {/* How It Works */}
      <section className="works">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">
            <h3>1</h3>
            <p>Upload Resume</p>
          </div>

          <div className="step">
            <h3>2</h3>
            <p>AI Screening</p>
          </div>

          <div className="step">
            <h3>3</h3>
            <p>Candidate Score</p>
          </div>

          <div className="step">
            <h3>4</h3>
            <p>Shortlist</p>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="stats">

        <div>
          <h2>1000+</h2>
          <p>Resumes</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Candidates</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Companies</p>
        </div>

        <div>
          <h2>95%</h2>
          <p>Accuracy</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>Resume Screening System</h3>
        
      </footer>

    </div>
  );
}

export default Home;