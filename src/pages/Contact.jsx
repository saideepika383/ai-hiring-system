import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <Header />

      <section className="contact-page">
        <div className="contact-container">

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. If you have any questions about jobs,
            recruitment, or our services, feel free to contact us.
          </p>

          <div className="contact-info">

            <div className="contact-box">
              <h3>📍 Address</h3>
              <p>10009 Mount Tabor Road, Odessa Missouri,United States.</p>
            </div>

            

            <div className="contact-box">
              <h3>📧 Email</h3>
              <p>info@snhoor.com</p>
            </div>

            <div className="contact-box">
              <h3>🕒 Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>10:00 AM - 19:00 PM</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;