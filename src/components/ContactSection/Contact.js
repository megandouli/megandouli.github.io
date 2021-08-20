import React from "react";
import styled from "styled-components";
import BodyText from "../../styled/BodyText";
import Section from "../../styled/Section";

const ContactSection = styled(Section)``;

const ContactContent = styled.div`
  max-width: 500px;
  margin: auto;
  min-height: 100vh;
`;

const Text = styled(BodyText)`
  font-size: 1em;
`;

const EmailLink = styled.a`
  color: white;
`;

const IconLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 40px -10px;
`;

const IconContainer = styled.a``;

const Icon = styled.img`
  width: 90px;
  height: auto;

  @media (max-width: 600px) {
    width: 60px;
  }
`;

const Contact = () => {
  return (
    <ContactSection inputColor={"#1B1B1B"}>
      <ContactContent>
        <Text color="white">
          If you want some guidance getting started with a project idea, need
          help with web dev or design, or just want to chat, feel free to
          contact me at{" "}
          <EmailLink href="mailto:meganlidou@gmail.com">
            meganlidou@gmail.com
          </EmailLink>
          !
        </Text>
        <IconLinksContainer>
          <IconContainer
            href="https://www.linkedin.com/in/megan-li-197b23196"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="./icons/linkedin-01.svg" alt="LinkedIn icon"></Icon>
          </IconContainer>

          <IconContainer
            href="https://github.com/megandouli"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="./icons/github-light.png" alt="GitHub icon"></Icon>
          </IconContainer>

          <IconContainer href="MeganLiResume.pdf" target="_blank">
            <Icon src="./icons/resume-01.svg" alt="Resume icon"></Icon>
          </IconContainer>
        </IconLinksContainer>
        <Text color="white">Built by Megan Li 2021</Text>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
