import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
