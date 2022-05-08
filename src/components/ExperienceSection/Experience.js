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
    title: "Software Engineering Intern @ Stripe",
    time: "Jan. 2022 - Apr. 2022",
    body: [
      `This was my second internship and my first experience working at a big company. All my previous coding experiences involved pair programming, so the next step for me was to see far I can drive a project as an individual contributor. At Stripe, I learned how to set myself up for success without monopolizing my teammates' time by searching through internal documentation and setting up short pairing sessions to get to a point where I could iterate and independently make progress.`,
      `I was most impressed by how quickly software engineers moved, how skillfully my teammates broke big tasks into smaller changes, and how proactively people iterated on their work — there was never hesitation about scrapping v1 and writing an improved v2 of an endpoint. Going forward, these are skills I want to actively work on developing/improving.`,
    ],
  },
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
    time: `July 2021 - Dec. 2021`,
    body: [
      "I developed and pitched the idea for a new role on the executive board (E-Board) after noticing a lack of communication between E-Board and other Sandbox members and lack of capacity within E-Board to take on more responsibilities. My main responsibilities as liaison included getting regular feedback from members, organizing open forums to hold conversations that affect the entire organization, and chatting with members one-on-one to understand their motivations, frustrations, and ways to improve their experience in Sandbox.",
    ],
  },
  {
    title: `Project & Technical Lead for SearchNEU @ Sandbox`,
    time: `July 2021 - Dec. 2021`,
    body: [
      "This was the most challenging role I held at Sandbox. It was my first time leading a team of developers and designers, and on top of organizing team meetings, managing the backlog, and prioritizing tickets, I was also responsible for establishing a sense of community among people who haven't worked together before and making the team a place to have fun as well. Definitely, DEFINITELY a challenge. I don't think I'll be trying a similar role again anytime soon, but I'm so grateful for the experience, the support of my team along the way, and this opportunity to learn more about my strengths and weaknesses.",
    ],
  },
  {
    title: `Developer for SearchNEU @ Sandbox`,
    time: `Sept. 2020 - Aug. 2021`,
    body: [
      "This was my first experience doing web development on a team. I was exposed to technologies and tools I’d never worked with before like GraphQL, AWS, Terraform, and TypeScript. I’ll always be grateful to the SearchNEU Technical Lead at the time for taking me under his wing and teaching me web development. My experience as his mentee is what inspires me to want to become a mentor to other developers.",
    ],
  },
];

const Experience = () => {
  return (
    <Section inputColor={"#FFAD5A"}>
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
