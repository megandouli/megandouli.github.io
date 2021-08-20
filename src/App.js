import React from "react";
import Contact from "./components/ContactSection/Contact";
import Education from "./components/EducationSection/Education";
import Experience from "./components/ExperienceSection/Experience";
import Intro from "./components/IntroSection/Intro";
import Nav from "./components/Nav";
import Projects from "./components/ProjectSection/Projects";
import Skills from "./components/SkillsSection/Skills";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

// Offset all anchors by a certain amount
// and scroll more quickly than the default 400ms
if (window && window.innerHeight <= 1000) {
  // offset for sticky nav header
  configureAnchors({ offset: -55, scrollDuration: 200 });
} else {
  configureAnchors({ offset: 0, scrollDuration: 200 });
}

class PageSection extends React.Component {
  render() {
    return this.props.content;
  }
}

function App() {
  return (
    <div className="App">
      <Nav />
      <ScrollableAnchor id="home">
        <PageSection content={<Intro />} />
      </ScrollableAnchor>
      <ScrollableAnchor id="education">
        <PageSection content={<Education />} />
      </ScrollableAnchor>
      <ScrollableAnchor id="skills">
        <PageSection content={<Skills />} />
      </ScrollableAnchor>
      <ScrollableAnchor id="experience">
        <PageSection content={<Experience />} />
      </ScrollableAnchor>
      <ScrollableAnchor id="projects">
        <PageSection content={<Projects />} />
      </ScrollableAnchor>
      <ScrollableAnchor id="contact">
        <PageSection content={<Contact />} />
      </ScrollableAnchor>
    </div>
  );
}

export default App;
