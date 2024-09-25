import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import "./app.css";
import Hero from "./Components/Hero";
import "bootstrap/dist/css/bootstrap.css";
import Project from "./Components/Projects";
import FeaturedProjects from "./Components/FeaturedProjects";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
    </>
  );
}

export default App;
