import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/TermsOfService.css";

function TermsOfService() {
  return (
    <>
      <Header />

      <section className="terms-page">
        <div className="terms-container">

          <h1>Terms of Service</h1>

          <p>
            Welcome to Snhoor International. By accessing and using our website,
            you agree to follow these Terms of Service.
          </p>

          <h2>User Responsibilities</h2>

          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Use the platform only for lawful purposes.</li>
            <li>Respect other users and employers.</li>
            <li>Do not misuse or copy website content.</li>
          </ul>

          <h2>Our Services</h2>

          <p>
            Snhoor International provides job listings and recruitment-related
            services. We do not guarantee employment or hiring outcomes.
          </p>

          <h2>Changes to Terms</h2>

          <p>
            We may update these terms from time to time. Continued use of the
            website means you accept the updated terms.
          </p>

          <h2>Contact</h2>

          <p>
            If you have any questions about these Terms of Service, please
            contact our support team.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default TermsOfService;