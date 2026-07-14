import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedJobs from "../components/FeaturedJobs";
import WhyChooseUs from "../components/WhyChooseUs";
import Companies from "./Companies";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedJobs />
      <WhyChooseUs />
      <Companies />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;