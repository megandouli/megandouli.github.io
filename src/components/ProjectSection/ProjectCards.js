import React from "react";
import styled from "styled-components";
import BodyText from "../../styled/BodyText";
import { Header } from "../../styled/Header";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5em;
  max-width: 400px;
  margin: 10px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    padding: 2.5em;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 800px) {
    max-width: 250px;
  }
  @media (max-width: 600px) {
  }
`;

const BodyContainer = styled.div``;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardHeader = styled(Header)`
  font-size: 1.8em;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const GithubIconContainer = styled.div`
  width: 1.8em;
  margin-top: 20px;
`;

const GithubIcon = styled.img`
  width: 100%;
  height: auto;
`;

const BodyTextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardBody = styled(BodyText)`
  font-size: 1em;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2px;
`;

const TechPill = styled.div`
  border-radius: 10px;
  border: 2px solid #ffad5a;
  padding: 6px;
  font-size: 0.8em;
  margin: 2px 4px 2px 0px;
  text-transform: uppercase;
`;

const SEARCHNEU_BODY = (
  <CardBody>
    I joined the SearchNEU team in Sandbox when the project was already fairly
    mature. Some of the work I’ve done to enhance and maintain SearchNEU
    include:
    <ul>
      <li>
        Creating new pages that show detailed information about a course (see{" "}
        <a
          href="https://searchneu.com/NEU/202210/classPage/CS/4500"
          target="_blank"
          rel="noreferrer"
        >
          example here
        </a>
        )
      </li>
      <li>Migrating the AWS infrastructure to a new account</li>
      <li>Adding backend support for CPS and LAW courses</li>
      <li>
        Collaborating with another developer to switch our notification system
        from Facebook Messenger to SMS messages
      </li>
    </ul>
  </CardBody>
);

const PROJECT_CARDS = [
  {
    imgSrc: "./images/SearchNEU.png",
    imgAltText: "SearchNEU screenshot",
    link: "https://searchneu.com/NEU",
    githubLink: "https://github.com/sandboxnu/searchneu",
    projectName: "SearchNEU",
    body: SEARCHNEU_BODY,
    tech: [
      "Node",
      "Express",
      "React",
      "TypeScript",
      "Elasticsearch",
      "GraphQL",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "Docker",
    ],
  },
  {
    imgSrc: "./images/SandboxNU.png",
    imgAltText: "SandboxNU website screenshot",
    link: "https://www.sandboxnu.com/clients",
    githubLink: "https://github.com/sandboxnu/sandboxneu.com",
    projectName: "SandboxNU.com",
    body: (
      <CardBody>
        When trying to find clients for Sandbox to work with, I noticed the
        Sandbox public facing website wasn’t very informative or easy to
        navigate from the perspective of potential clients. I designed a new
        client page in Figma which was then iterated upon by another Sandbox
        designer and I implemented the design in code.{" "}
        <a
          href="https://www.sandboxnu.com/clients"
          target="_blank"
          rel="noreferrer"
        >
          Check it out!
        </a>
      </CardBody>
    ),
    tech: ["Gatsby.js", "Styled-Components", "Figma"],
  },
  {
    imgSrc: "./images/IngredientConverter.png",
    imgAltText: "Ingredient Converter app screenshot",
    link: "https://megandouli.github.io/ingredient-converter/",
    githubLink: "https://github.com/megandouli/ingredient-converter",
    projectName: "Ingredient Converter",
    body: (
      <CardBody>
        In an effort to learn more about and practice using React, I created a
        simple web application to convert common baking ingredients between
        volume and weight. As an amateur baker, I’ve definitely used this app to
        convert recipes from cups/tablespoons to grams/oz for more accurate
        measurements.{" "}
        <a
          href="https://megandouli.github.io/ingredient-converter/"
          target="_blank"
          rel="noreferrer"
        >
          Try it out!
        </a>
      </CardBody>
    ),
    tech: ["React"],
  },
  {
    imgSrc: "./images/SYSApp.png",
    imgAltText: "Volunteering club app screenshot",
    projectName: "Volunteering Club App",
    body: (
      <CardBody>
        This was my first experience building a full-stack web application. From
        my time in a high school volunteering club of 200+ members, I remembered
        how much work the club secretaries had to do to track volunteering
        events and individual member hours. I created a web application to
        facilitate online signups and reduce the club secretaries’ workload.
        Additional features included user authentication, event creation, event
        attendance, and different levels of access for advisors, club officers,
        and general members.
      </CardBody>
    ),
    tech: ["Node", "Express", "MySQL", "SASS", "Handlebars"],
  },
];

const Card = ({
  imgSrc,
  imgAltText,
  link,
  projectName,
  body,
  tech,
  githubLink,
}) => {
  return (
    <CardContainer>
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <ImageContainer>
              <Image src={imgSrc} alt={imgAltText}></Image>
            </ImageContainer>
          </a>
        ) : (
          <ImageContainer>
            <Image src={imgSrc} alt={imgAltText}></Image>
          </ImageContainer>
        )}

        <BodyContainer>
          <CardHeaderContainer>
            <CardHeader>{projectName}</CardHeader>
            {githubLink ? (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <GithubIconContainer>
                  <GithubIcon
                    src="./icons/github.png"
                    alt="Github icon"
                  ></GithubIcon>
                </GithubIconContainer>
              </a>
            ) : null}
          </CardHeaderContainer>

          <BodyTextContainer>{body}</BodyTextContainer>
        </BodyContainer>
      </div>
      <TechContainer>
        {tech.map((t) => (
          <TechPill key={t}>{t}</TechPill>
        ))}
      </TechContainer>
    </CardContainer>
  );
};

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(50vw - 325px - 2em);

  @media (max-width: 1100px) {
    margin-left: 0;
  }
`;

const ProjectCards = () => {
  return (
    <ProjectCardsContainer>
      {PROJECT_CARDS.map((project) => (
        <Card
          key={project.projectName}
          imgSrc={project.imgSrc}
          imgAltText={project.imgAltText}
          link={project.link}
          projectName={project.projectName}
          body={project.body}
          tech={project.tech}
          githubLink={project.githubLink}
        />
      ))}
    </ProjectCardsContainer>
  );
};

export default ProjectCards;
