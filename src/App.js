import React from "react";
import Contact from "./components/ContactSection/Contact";
import Education from "./components/EducationSection/Education";
import Experience from "./components/ExperienceSection/Experience";
import Intro from "./components/IntroSection/Intro";
import Nav from "./components/Nav";
import Projects from "./components/ProjectSection/Projects";
import Skills from "./components/SkillsSection/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
