import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/CareerAdvice.css";

function CareerAdvice() {
  return (
    <>
      <Header />

      <section className="career-page">
        <div className="career-container">

          <h1>Career Advice</h1>

          <p>
            Get expert career guidance to help you succeed in your professional journey.
          </p>

          <div className="career-box">
            <h2>Career Tips</h2>

            <ul>
              <li>Keep your resume updated.</li>
              <li>Prepare well before interviews.</li>
              <li>Improve your communication skills.</li>
              <li>Continue learning new technologies.</li>
              <li>Build your professional network.</li>
              <li>Set clear career goals.</li>
            </ul>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default CareerAdvice;