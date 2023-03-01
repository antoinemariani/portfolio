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
      {/* <div
        id="about"
        className="flex items-center justify-center min-w-full min-h-screen text-center bg-amber-100"
      >
        <About />
      </div> */}
      <div className="flex items-center justify-center min-w-full min-h-screen text-center bg-white">
        <Projects />
      </div>
      <div className="flex items-center justify-center min-w-full min-h-screen text-center bg-amber-100">
        <div
          id="skills"
          className="container flex justify-center max-w-full mx-8 my-16"
        >
          <div className="">
            <h2 className="text-4xl font-bold text-gray-800">Tech Skills</h2>
            <Skills />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center min-w-full min-h-screen text-center bg-red-100">
        <div
          id="contact"
          className="container flex justify-center max-w-full mx-8 my-16"
        >
          <ContactForm />
        </div>
      </div> */}
    </div>
  );
}

export default App;
