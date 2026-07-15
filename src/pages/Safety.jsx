import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Safety.css";

function Safety() {
  return (
    <>
      <Header />

      <section className="safety-page">
        <div className="safety-container">

          <h1>Safety</h1>

          <p>
            Your safety is our priority. Snhoor International is committed to
            providing a secure and trusted platform for job seekers and employers.
          </p>

          <h2>Safety Tips</h2>

          <ul>
            <li>Never share your passwords with anyone.</li>
            <li>Verify employer details before accepting offers.</li>
            <li>Report suspicious job postings immediately.</li>
            <li>Keep your account information secure.</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Safety;