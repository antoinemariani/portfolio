import React, { useState } from "react";
import logo from "./logo.svg";
import Projects from "./Projects.jsx";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-yellow-300 text-center">
      <p className="h-1">Welcome to my homepage!</p>
      <Projects />
    </div>
  );
}

export default App;
