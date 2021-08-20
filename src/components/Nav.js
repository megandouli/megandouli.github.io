import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
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

  @media (max-width: 1000px) {
    transition: visibility 0.2s ease-in-out 0.2s;
    display: block;
    margin-top: 60px;
    padding-bottom: 50px;
    border-radius: 0px;
    ${(props) =>
      props.isOpen
        ? css`
            visibility: visible;
            display: block;
          `
        : css`
            visibility: hidden;
            display: none;
            transition: visibility 0.1s ease-in-out;
          `}
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

  @media (max-width: 1000px) {
    display: block;
    width: auto;
  }
`;

const NavLink = styled.a`
  font-size: 18px;
  color: ${(props) => (props.active ? "#2b2b2b" : "white")};
  text-decoration: none;

  @media (max-width: 1350px) {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.17em;
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

// for mobile

const ToggleMobileSidebarContainer = styled.div`
  background-color: #2b2b2b;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  visibility: hidden;
  cursor: pointer;

  @media (max-width: 1000px) {
    visibility: visible;
  }
`;

const ToggleMobileSidebarIcon = styled.span`
  position: absolute;
  width: 2em;
  height: 0.25em;
  top: 30px;
  right: 30px;
  border-radius: 4px;
  background-color: white;
  ${(props) =>
    props.isOpen &&
    css`
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(45deg);
    `}
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 2em;
    height: 0.25em;
    border-radius: 4px;
    background-color: white;
    top: -0.64em;
    transition: top 75ms ease 0.12s, opacity 75ms ease;
    ${(props) =>
      props.isOpen &&
      css`
        top: 0;
        transition: top 75ms ease, opacity 75ms ease 0.12s;
      `}
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 2em;
    height: 0.25em;
    border-radius: 4px;
    background-color: white;
    bottom: -0.65em;
    transition: bottom 75ms ease 0.12s,
      transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${(props) =>
      props.isOpen &&
      css`
        bottom: 0;
        transition: bottom 75ms ease,
          transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        transform: rotate(-90deg);
      `}
  }
`;

const Nav = () => {
  const [currHash, setCurrHash] = useState(
    (window && window.location.hash) || "#home"
  );
  const [sideOpen, setSideOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      setCurrHash(location.hash);
    });
  }, [history]);

  const handleBurgerClick = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <NavContainer>
      <ToggleMobileSidebarContainer onClick={handleBurgerClick}>
        <ToggleMobileSidebarIcon isOpen={sideOpen} />
      </ToggleMobileSidebarContainer>
      <NavList isOpen={sideOpen}>
        {NAV_LINKS.map((nav, index) => (
          <NavListItem
            key={nav.name}
            first={index === 0}
            last={index === NAV_LINKS.length - 1}
            active={nav.link === currHash}
          >
            <NavLink
              href={nav.link}
              active={nav.link === currHash}
              onClick={() => {
                setSideOpen(false);
              }}
            >
              {nav.name}
            </NavLink>
          </NavListItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;
