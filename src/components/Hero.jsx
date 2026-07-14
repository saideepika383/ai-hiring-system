import { FaBriefcase, FaBuilding, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Hero.css";

function Hero() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">
          <h1>Find Your Dream Job Today</h1>

          <p>
            Explore thousands of job opportunities from trusted companies
            and take the next step in your career.
          </p>

          <div className="stats-section">
            <div className="stat-card">
              <FaBriefcase className="stat-icon" />
              <h2>10,000+</h2>
              <p>Jobs</p>
            </div>

            <div className="stat-card">
              <FaBuilding className="stat-icon" />
              <h2>500+</h2>
              <p>Companies</p>
            </div>

            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <h2>15,000+</h2>
              <p>Candidates</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">

          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Link to={`/jobs?title=${jobTitle}&location=${location}`}>
            <button className="search-btn">
              Search Jobs
            </button>
          </Link>

         

        </div>

      </div>
    </section>
  );
}

export default Hero;