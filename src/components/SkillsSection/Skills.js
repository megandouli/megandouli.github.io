import React from "react";
import styled from "styled-components";
import Section from "../../styled/Section";

const skills = [
  {
    name: "WEB DEVELOPMENT",
    body: [
      `Through personal projects, club involvement, and work experience, I’ve done a significant amount of both frontend and backend web development. Most of my experience has been in JavaScript (React.js, Express.js, Node.js, Gatsby.js). I’ve also worked with GraphQL and dabbled in AWS (IAM, EC2, RDS, ECR, ECS).`,
      "View Projects",
    ],
  },
  {
    name: "DESIGN",
    body: [
      `Most of my design experience comes from class projects, but I often apply the design principles I’ve learned about to my coding work. I always keep an eye on typography and color contrast when doing frontend work to optimize readability. When possible, I use Figma to build lo-fi and hi-fi wireframes before jumping into programming.`,
      "Random fun fact: I love designing resumes with Adobe InDesign.",
    ],
  },
  {
    name: "COMMUNICATION",
    body: [
      `Expressing ideas and thoughts. Presenting information. Asking questions. Being transparent. Giving feedback to help improve instead of to criticize. Speaking up when you think something should change. These are all aspects of communication; a skill that is the foundation of teamwork. I’ve had a lot of opportunities to learn and grow in this area through club work and co-op, but it’s still something I continually strive to improve on.`,
    ],
  },
];

const SkillsOrderedList = styled.ol`
  max-width: 800px;
  counter-reset: skills-counter;
  list-style: none;
  margin-left: calc(50vw - 325px - 2em);
  padding: 0px;
  @media (max-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 800px) {
    padding-right: 4em;
  }

  @media (max-width: 600px) {
    padding-right: 0;
  }
`;

const SkillsListItem = styled.li`
  counter-increment: skills-counter;
  &:before {
    content: counter(skills-counter);
    color: #ffffff;
    font-style: italic;
    font-weight: 700;
    font-size: 2.5em;
    background: black;
    border-radius: 50%;
    text-align: center;

    width: 80px;
    height: 80px;
    line-height: 80px;
    position: relative;
    display: inline-block;

    @media (max-width: 600px) {
      font-size: 1.5em;
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
  }
`;

const SkillsListHeader = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 2em;
  display: inline-block;
  margin-left: 30px;
  margin-bottom: 40px;
  position: relative;
  top: -15px;
  @media (max-width: 600px) {
    top: 0px;
    margin-left: 20px;
    font-size: 1.5em;
  }
`;

const SkillsListBody = styled.div`
  font-size: 1em;
  line-height: 1.5;
  position: relative;
  top: -50px;
  margin-left: 110px;
  margin-top: 1em;
  @media (max-width: 600px) {
    top: -30px;
    margin-left: 60px;
  }
`;

const Skills = () => {
  return (
    <Section inputColor={"#FF8474"}>
      <SkillsOrderedList>
        {skills.map((s, sIndex) => (
          <SkillsListItem key={s.name}>
            <SkillsListHeader>{s.name}</SkillsListHeader>
            {s.body.map((b, bIndex) => (
              <SkillsListBody key={`skill-${sIndex}-body-${bIndex}`}>
                {b}
              </SkillsListBody>
            ))}
          </SkillsListItem>
        ))}
      </SkillsOrderedList>
    </Section>
  );
};

export default Skills;
