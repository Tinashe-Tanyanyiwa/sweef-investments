import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <ClimbingBoxLoader
            color={"#FF2222"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div style={{ fontFamily: "Poppins" }}>
          <Landing></Landing>
          <About></About>
          <Services></Services>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default App;
