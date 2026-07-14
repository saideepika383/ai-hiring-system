import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Header />

      <section className="privacy-page">
        <div className="privacy-container">

          <h1>Privacy Policy</h1>

          <p>
            At Snhoor International, we value your privacy and are committed to
            protecting your personal information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect your name, email address, phone number, resume,
            and other information that you provide while using our platform.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide job search services.</li>
            <li>To improve our platform.</li>
            <li>To communicate important updates.</li>
            <li>To help employers connect with candidates.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We use appropriate security measures to protect your information
            from unauthorized access or misuse.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us through our Contact page.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;