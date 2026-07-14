import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/ResumeBuilder.css";

function ResumeBuilder() {
  return (
    <>
      <Header />

      <section className="resume-page">
        <div className="resume-container">

          <h1>Resume Builder</h1>

          <p>
            Build a professional resume to increase your chances of getting
            hired by top companies.
          </p>

          <div className="resume-box">

            <h2>Resume Tips</h2>

            <ul>
              <li>Use a professional format.</li>
              <li>Highlight your skills and achievements.</li>
              <li>Include relevant work experience.</li>
              <li>Keep your resume clear and concise.</li>
              <li>Proofread before submitting.</li>
            </ul>

            <button>Create Resume</button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ResumeBuilder;