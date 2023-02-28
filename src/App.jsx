import React, { useState } from "react";
import Projects from "./Projects.jsx";
import Banner from "./Banner.jsx";
import Navbar from "./Navbar.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import BackToTopButton from "./BackToTopButton.jsx";
import ContactForm from "./ContactForm.jsx";

function App() {
  return (
    <div>
      <BackToTopButton />
      <Navbar />
      <Banner />
      <div className="flex min-h-screen min-w-full items-center justify-center bg-amber-100 text-center">
        <About />
      </div>
      <div className="flex min-h-screen min-w-full items-center justify-center bg-amber-100 text-center">
        <Projects />
      </div>
      <div className="flex min-h-screen min-w-full items-center justify-center bg-green-100 text-center">
        <div
          id="skills"
          className="container my-16 mx-8 flex max-w-full justify-center"
        >
          <Skills />
        </div>
      </div>
      <div className="flex min-h-screen min-w-full items-center justify-center bg-red-100 text-center">
        <div
          id="contact"
          className="container my-16 mx-8 flex max-w-full justify-center"
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
