import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedJobs from "./components/FeaturedJobs";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <>
          <Header 
            onLoginClick={() => setPage("login")}
            onSignupClick={() => setPage("signup")}
          />

          <Hero />
          <FeaturedJobs />
          <WhyChooseUs />
          <ContactSection />
          <Footer />
        </>
      )}

      {page === "login" && (
        <Login 
          onSignupClick={() => setPage("signup")}
          onHomeClick={() => setPage("home")}
        />
      )}

      {page === "signup" && (
        <Signup 
          onLoginClick={() => setPage("login")}
          onHomeClick={() => setPage("home")}
        />
      )}
    </>
  );
}

export default App;