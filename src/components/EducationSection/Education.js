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
        I joined an incredibly fun and supportive tennis team and went to team
        state my senior year — I still enjoy playing tennis every now and then
        with friends and family!
      </CardBodyText>
      <CardBodyText as="li">
        I ~attempted~ to overcome my fear of public speaking by joining our
        Forensics team.
      </CardBodyText>
      <CardBodyText as="li">
        I developed my leadership skills in a community service club by
        collaborating with my peers to organize fundraisers and
        volunteering/club events.
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
      I graduated with a combined degree in Computer Science and Design. Some
      things I’ve learned/done:
    </CardBodyText>
    <ul>
      <CardBodyText as="li">
        I took Typography 1, 2 & 3 and had my mind blown by the rules and
        principles of typography — I am now unashamedly a type snob and even
        designed my own typeface, Patina!
      </CardBodyText>
      <CardBodyText as="li">
        I joined <a href="https://www.sandboxnu.com/">Sandbox</a>, a student-led
        software consultancy at Northeastern, where I made new friends, worked
        on cool projects, and grew from being a developer to being a technical
        lead and member of the executive board.
      </CardBodyText>
      <CardBodyText as="li">
        I co-oped (worked full-time for 6 months) at PowerAdvocate where I grew
        more confident as a developer and realized I highly value a strong
        culture of collaboration and mentorship at a workplace.
      </CardBodyText>
      <CardBodyText as="li">
        I interned at Stripe in Seattle where I got a taste of how teams move
        quickly and in coordination across a big organization. I also met so
        many incredible people here and made lifelong friendships!
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
        header1="Northeastern University"
        header2={[
          "B.S. in Computer Science & Design",
          "Class of 2023",
          "Boston, MA",
        ]}
        imgSrc={"./images/northeastern-grad.jpg"}
        imgAltText={"Megan Northeastern graduation"}
        body={NortheasternCardBody}
      ></Card>
      <Card
        isBottom={true}
        header1="James Madison Memorial High School"
        header2={["Class of 2019", "Madison, WI"]}
        imgSrc={"./images/tennis.jpg"}
        imgAltText={"Megan high school tennis pic"}
        body={JMMCardBody}
      ></Card>
    </Section>
  );
};

export default Education;
