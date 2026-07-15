import "../styles/ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>Have questions? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Let's Build Your Career Together</h2>

          <p>
            At <strong>Snhoor International</strong>, we connect talented
            professionals with trusted employers across multiple industries.
            Whether you're searching for your dream job or looking to hire
            the right talent, we're here to support your journey with
            reliable recruitment solutions.
          </p>

         
         

        </div>

        {/* Right Side */}
        <div className="contact-form">

          <h3>Send us a Message</h3>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="4"
              placeholder="Write your message..."
            ></textarea>

            <button type="button">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;