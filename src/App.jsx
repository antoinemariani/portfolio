import React, { useState } from "react";
import Projects from "./Projects.jsx";
import Banner from "./Banner.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex min-h-screen min-w-full items-center justify-center bg-amber-100 text-center">
        <Projects />
      </div>
    </div>
  );
}

export default App;
