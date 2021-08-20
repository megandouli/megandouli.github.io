import React from "react";
import styled from "styled-components";
import Section from "../../styled/Section";
import ProjectCards from "./ProjectCards";

const ProjectsSection = styled(Section)``;

const Projects = () => {
  return (
    <ProjectsSection inputColor={"#FFC996"}>
      <ProjectCards />
    </ProjectsSection>
  );
};

export default Projects;
