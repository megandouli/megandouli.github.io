import styled from "styled-components";

const Header = styled.h2`
  font-size: 2.5em;
  font-weight: 800;
  color: ${(props) => props.color || "black"};
`;

export { Header };
