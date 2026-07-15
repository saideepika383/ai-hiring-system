import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../styles/About.css";

function About() {
  return (
    <>
      <Header />

      <section className="about-page">
        <div className="about-container">

          <h1>About Snhoor International</h1>

          <p>
            Snhoor International is a trusted online job portal that connects
            talented job seekers with leading companies across various
            industries. Our platform is designed to make the hiring process
            simple, fast, and reliable.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to bridge the gap between employers and job seekers
            by providing a secure and user-friendly recruitment platform.
          </p>

          <h2>What We Offer</h2>

          <ul>
            <li>Browse thousands of job opportunities.</li>
            <li>Apply for jobs with ease.</li>
            <li>Connect with top hiring companies.</li>
            <li>Build a successful career.</li>
          </ul>

          <h2>Why Choose Us?</h2>

          <p>
            We focus on providing quality job listings, a smooth user
            experience, and trusted recruitment services for both candidates
            and employers.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;