import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/CookiePolicy.css";

function CookiePolicy() {
  return (
    <>
      <Header />

      <section className="cookie-page">
        <div className="cookie-container">

          <h1>Cookie Policy</h1>

          <p>
            This Cookie Policy explains how Snhoor International uses cookies
            to improve your browsing experience.
          </p>

          <h2>What Are Cookies?</h2>

          <p>
            Cookies are small text files stored on your device when you visit
            our website. They help us remember your preferences and improve
            website performance.
          </p>

          <h2>How We Use Cookies</h2>

          <ul>
            <li>Remember your preferences.</li>
            <li>Improve website performance.</li>
            <li>Analyze website traffic.</li>
            <li>Provide a better user experience.</li>
          </ul>

          <h2>Managing Cookies</h2>

          <p>
            You can disable cookies through your browser settings. However,
            some features of the website may not function properly.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default CookiePolicy;