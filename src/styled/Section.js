import styled from "styled-components";

export const SectionContent = styled.section`
  background-color: ${(props) => props.inputColor || "white"};
`;

const Section = styled(SectionContent)`
  margin: 0 auto;
  padding: 5em 3em;
  box-sizing: border-box;
`;

export default Section;
