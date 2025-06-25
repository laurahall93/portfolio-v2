import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-primary text-text font-poppins">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
