import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedJobs from "./components/FeaturedJobs";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {page === "home" && (
        <>
          <Header
            onLoginClick={() => setPage("login")}
            onSignupClick={() => setPage("signup")}
            onDashboardClick={() => {
              if (isLoggedIn) {
                setPage("dashboard");
              } else {
                alert("Please login first.");
                setPage("login");
              }
            }}
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
          onHomeClick={() => {
            setIsLoggedIn(true);
            setPage("home");
          }}
        />
      )}

      {page === "signup" && (
        <Signup
          onLoginClick={() => setPage("login")}
          onHomeClick={() => setPage("home")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;