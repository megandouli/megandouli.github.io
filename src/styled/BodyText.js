import styled from "styled-components";

const BodyText = styled.div`
  font-size: 1.25em;
  line-height: 1.5;
  color: ${(props) => props.color || "black"};
`;

export default BodyText;
