import React from "react";
import Intro from "./components/IntroSection/Intro";
import Education from "./components/EducationSection/Education";
import Skills from "./components/SkillsSection/Skills";
import Experience from "./components/ExperienceSection/Experience";
import Projects from "./components/ProjectSection/Projects";
import Contact from "./components/ContactSection/Contact";

function App() {
  return (
    <div className="App">
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
