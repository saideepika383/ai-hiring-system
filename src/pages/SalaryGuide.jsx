import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/SalaryGuide.css";

function SalaryGuide() {
  return (
    <>
      <Header />

      <section className="salary-page">
        <div className="salary-container">

          <h1>Salary Guide</h1>

          <p>
            Explore estimated salary ranges for popular job roles to help you
            make informed career decisions.
          </p>

          <table className="salary-table">
            <thead>
              <tr>
                <th>Job Role</th>
                <th>Experience</th>
                <th>Average Salary</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Software Developer</td>
                <td>0–2 Years</td>
                <td>₹4 – ₹6 LPA</td>
              </tr>

              <tr>
                <td>Frontend Developer</td>
                <td>2–5 Years</td>
                <td>₹6 – ₹10 LPA</td>
              </tr>

              <tr>
                <td>Backend Developer</td>
                <td>3–6 Years</td>
                <td>₹8 – ₹14 LPA</td>
              </tr>

              <tr>
                <td>UI/UX Designer</td>
                <td>2–5 Years</td>
                <td>₹5 – ₹9 LPA</td>
              </tr>

              <tr>
                <td>Data Analyst</td>
                <td>1–4 Years</td>
                <td>₹5 – ₹8 LPA</td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default SalaryGuide;