import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Accessibility.css";

function Accessibility() {
  return (
    <>
      <Header />

      <section className="accessibility-page">
        <div className="accessibility-container">

          <h1>Accessibility</h1>

          <p>
            Snhoor International is committed to making our website accessible
            to everyone, including people with disabilities.
          </p>

          <h2>Our Commitment</h2>

          <ul>
            <li>Easy-to-read content.</li>
            <li>Responsive design.</li>
            <li>Keyboard-friendly navigation.</li>
            <li>Continuous accessibility improvements.</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Accessibility;