import React from "react";
import styled from "styled-components";
import BodyText from "../../styled/BodyText";
import Section from "../../styled/Section";
import Card from "./Card";

const CardBodyText = styled(BodyText)`
  font-size: 1em;
`;

const JMMCardBody = (
  <>
    <CardBodyText>
      I absolutely loved the four years I got to spend at JMM! Some highlights:
    </CardBodyText>
    <ul>
      <CardBodyText as="li">
        Joined an incredibly fun and supportive tennis team and went to team
        state my senior year — I still enjoy playing tennis regularly with
        friends and family
      </CardBodyText>
      <CardBodyText as="li">
        Attempted to overcome my fear of public speaking by joining our
        Forensics team — I still get nervous to this day but I know I’m capable
        of speaking to large groups
      </CardBodyText>
      <CardBodyText as="li">
        Developed my leadership skills in a community service club by
        collaborating with others to organize fundraisers and volunteering/club
        events
      </CardBodyText>
    </ul>
    <CardBodyText>
      I met some truly amazing people in my time here who continue to inspire
      and shape who I am today.
    </CardBodyText>
  </>
);

const NortheasternCardBody = (
  <>
    <CardBodyText>
      I’m currently a third year studying Computer Science and Design. Some
      things I’ve learned/done so far:
    </CardBodyText>
    <ul>
      <CardBodyText as="li">
        Took Typography 1 and had my mind blown by the rules and principles of
        typography — I am now unashamedly a type snob
      </CardBodyText>
      <CardBodyText as="li">
        Joined <a href="https://www.sandboxnu.com/">Sandbox</a>, a student-led
        software consultancy at Northeastern, where I made new friends, worked
        on cool projects, and grew from being a developer to being a technical
        lead and member of the executive board
      </CardBodyText>
      <CardBodyText as="li">
        Co-oped (worked full-time for 6 months) at PowerAdvocate where I grew
        more confident as a developer and realized I highly value a strong
        culture of collaboration and mentorship at a workplace
      </CardBodyText>
    </ul>
    <CardBodyText>
      I’m excited to keep learning, growing, and meeting new people!
    </CardBodyText>
  </>
);

const Education = () => {
  return (
    <Section inputColor={"#9F5F80"}>
      <Card
        header1="James Madison Memorial High School"
        header2={["Class of 2019", "Madison, WI"]}
        imgSrc={"./images/megan-jmm.jpg"}
        imgAltText={"Megan high school graduation pic"}
        body={JMMCardBody}
      ></Card>
      <Card
        isBottom={true}
        header1="Northeastern University"
        header2={[
          "Candidate for a B.S. in Computer Science & Design",
          <i>Expected 2023</i>,
          "Boston, MA",
        ]}
        imgSrc={"./images/megan-northeastern.jpg"}
        imgAltText={"Megan Northeastern pic"}
        body={NortheasternCardBody}
      ></Card>
    </Section>
  );
};

export default Education;
