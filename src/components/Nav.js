import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: inline-block;
  position: fixed;
  top: 20%;
  left: 7%;
`;

const NavList = styled.ul`
  list-style-type: none;
  border-radius: 10px;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  background-color: ${(props) => (props.active ? "white" : "#2b2b2b")};
  padding: 30px 40px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  border-top-left-radius: ${(props) => (props.first ? "10px" : "0px")};
  border-top-right-radius: ${(props) => (props.first ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.last ? "10px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.last ? "10px" : "0px")};
`;

const NavLink = styled.a`
  font-size: 18px;
  color: ${(props) => (props.active ? "#2b2b2b" : "white")};
  text-decoration: none;
`;

const NAV_LINKS = [
  { link: "#", name: "Home" },
  { link: "#education", name: "Education" },
  { link: "#skills", name: "Skills" },
  { link: "#experience", name: "Experience" },
  { link: "#projects", name: "Projects" },
  { link: "#contact", name: "Contact" },
];

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        {NAV_LINKS.map((nav, index) => (
          <NavListItem
            key={nav.name}
            first={index === 0}
            last={index === NAV_LINKS.length - 1}
          >
            <NavLink href={nav.link}>{nav.name}</NavLink>
          </NavListItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;
