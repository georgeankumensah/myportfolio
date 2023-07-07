import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Projects from "../components/Projects/projects";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
};

export default Homepage;
