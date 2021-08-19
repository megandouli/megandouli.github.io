import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const NavContainer = styled.nav`
  display: inline-block;
  position: fixed;
  top: 20%;
  left: 6%;
  z-index: 10;
  @media (max-width: 1350px) {
    left: 4%;
  }

  @media (max-width: 1200px) {
    top: 0;
    left: 0;
    display: block;
    width: 100%;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  background-color: #2b2b2b;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
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
  @media (max-width: 1200px) {
    border-radius: 0;
    display: inline-block;
    width: 100%;
  }
`;

const NavLink = styled.a`
  font-size: 18px;
  color: ${(props) => (props.active ? "#2b2b2b" : "white")};
  text-decoration: none;

  @media (max-width: 1350px) {
    font-size: 14px;
  }
`;

const NAV_LINKS = [
  { link: "#home", name: "Home" },
  { link: "#education", name: "Education" },
  { link: "#skills", name: "Skills" },
  { link: "#experience", name: "Experience" },
  { link: "#projects", name: "Projects" },
  { link: "#contact", name: "Contact" },
];

const Nav = () => {
  const [currHash, setCurrHash] = useState(
    (window && window.location.hash) || "#home"
  );
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      setCurrHash(location.hash);
    });
  }, [history]);

  return (
    <NavContainer>
      <NavList>
        {NAV_LINKS.map((nav, index) => (
          <NavListItem
            key={nav.name}
            first={index === 0}
            last={index === NAV_LINKS.length - 1}
            active={nav.link === currHash}
          >
            <NavLink href={nav.link} active={nav.link === currHash}>
              {nav.name}
            </NavLink>
          </NavListItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;
