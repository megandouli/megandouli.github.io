import React from "react";
import styled from "styled-components";
import BodyText from "../../styled/BodyText";
import { Header } from "../../styled/Header";
import Section from "../../styled/Section";

const SectionContent = styled.div`
  margin-left: calc(50vw - 325px - 2em);
  margin-bottom: 100px;

  @media (max-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    padding-left: 2em;
    padding-right: 2em;
  }
`;

const SectionHeader = styled(Header)`
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

const WorkExperienceContainer = styled.div``;

const ClubExperienceContainer = styled.div`
  margin-top: 140px;
`;

const ExperienceHeader = styled(SectionHeader)`
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const ExperienceContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 700px;
`;

const TitleHeader = styled.h4`
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 0px;
`;

const TimeHeader = styled(TitleHeader)`
  font-style: italic;
  margin-top: 5px;
  margin-bottom: 25px;
  font-weight: 600;
`;

const ExperienceBody = styled(BodyText)`
  margin-bottom: 20px;
  font-size: 1em;
`;

const WORK_EXPERIENCE = [
  {
    title: "Software Developer Co-op @ PowerAdvocate",
    time: "Jan. 2021 - July 2021",
    body: [
      `This was my first ever co-op and first experience working full-time at a company, and I couldn’t have asked for a better environment to learn, grow and build my confidence. I had a mentor who was always there to support me and push me to pursue ambitious goals. My teammates would never hesitate to jump into a call to do dev design or help with debugging or pair program. Everyone I interacted with was welcoming and invested in helping me grow.`,
      `Besides gaining technical skills here (React, AWS, a bit of Kotlin), I learned that I thrive in places that emphasize teamwork, collaboration and mentorship, and this is the kind of culture I want to create or contribute to wherever I go.`,
    ],
  },
];

const CLUB_EXPERIENCE = [
  {
    title: `E-Board Liaison @ Sandbox`,
    time: `July 2021 - Present`,
    body: [
      "I developed and pitched the idea for a new role on the executive board (E-Board) after noticing problems with lack of communication between E-Board and other Sandbox members and lack of capacity within E-Board to take on more responsibilities. I’m currently in this role and my main responsibilities include getting regular feedback from members, organizing open forums to hold conversations that affect the entire organization, and chatting with members one-on-one to understand their motivations, frustrations, and ways to improve their experience in Sandbox.",
    ],
  },
  {
    title: `Technical Lead for SearchNEU @ Sandbox`,
    time: `July 2021 - Present`,
    body: [
      "One of the most challenging problems within Sandbox is knowledge transfer / project continuity when every developer has a turnover rate of 2-3 years at most. SearchNEU is also a fairly mature project with a significant amount of code written by developers no longer on the team. As Technical Lead, I’m exploring ways to simplify the codebase as much as possible to facilitate future maintenance of the project. I’m also putting effort into creating better documentation to make it easier to onboard new developers. Perhaps most rewarding for me is I’ll be mentoring younger developers who’ll take over the project when I graduate from Northeastern. ",
    ],
  },
  {
    title: `Developer for SearchNEU @ Sandbox`,
    time: `Sept. 2020 - July 2021`,
    body: [
      "This was my first experience doing web development on a team. I was exposed to technologies and tools I’d never worked with before like GraphQL, AWS, Terraform, and TypeScript. I’ll always be grateful to the SearchNEU Technical Lead at the time for taking me under his wing and teaching me web development. My experience as his mentee is what inspires me to want to become a mentor to other developers.",
    ],
  },
];

const Experience = () => {
  return (
    <Section inputColor={"#FFAD5A"} id="experience">
      <SectionContent>
        <BodyText>(What's not on the resume.)</BodyText>
        <WorkExperienceContainer>
          <ExperienceHeader as="h3">Work Experience</ExperienceHeader>
          {WORK_EXPERIENCE.map((exp, expIndex) => (
            <ExperienceContainer key={`exp-${expIndex}`}>
              <TitleHeader>{exp.title}</TitleHeader>
              <TimeHeader>{exp.time}</TimeHeader>
              {exp.body.map((b, bIndex) => (
                <ExperienceBody key={`exp-${expIndex}-body-${bIndex}`}>
                  {b}
                </ExperienceBody>
              ))}
            </ExperienceContainer>
          ))}
        </WorkExperienceContainer>
        <ClubExperienceContainer>
          <ExperienceHeader as="h3">Club Experience</ExperienceHeader>
          {CLUB_EXPERIENCE.map((exp, expIndex) => (
            <ExperienceContainer key={`exp-${expIndex}`}>
              <TitleHeader>{exp.title}</TitleHeader>
              <TimeHeader>{exp.time}</TimeHeader>
              {exp.body.map((b, bIndex) => (
                <ExperienceBody key={`exp-${expIndex}-body-${bIndex}`}>
                  {b}
                </ExperienceBody>
              ))}
            </ExperienceContainer>
          ))}
        </ClubExperienceContainer>
      </SectionContent>
    </Section>
  );
};

export default Experience;
