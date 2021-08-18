import React from "react";
import styled from "styled-components";
import Section from "../../styled/Section";
import BodyText from "../../styled/BodyText";
import { Header } from "../../styled/Header";

const IntroSection = styled(Section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutMeContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

const HeaderLine = styled(Header)`
  font-size: 4em;
  font-weight: 600;
  border-bottom: 3px solid white;
  text-align: center;
  margin-top: 0;
  padding-bottom: 0.2em;
`;

const Intro = () => {
  return (
    <IntroSection inputColor={"#583D72"}>
      <AboutMeContainer>
        <HeaderLine color="white">Hi, it's Megan!</HeaderLine>
        <BodyText color="white">
          I’m a full-stack web developer with an eye for design. I love creating
          elegant software that’s user-friendly and makes an impact. I thrive in
          places that emphasize teamwork, collaboration and mentorship, and I’m
          a strong proponent of pair programming.
        </BodyText>
      </AboutMeContainer>
    </IntroSection>
  );
};

export default Intro;
