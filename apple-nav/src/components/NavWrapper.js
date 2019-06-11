import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1024px;
  color: white;
  font-size: 0.9rem;
  height: 44px;
  padding: 0 25px;
  font-weight: light;
`;

const NavWrapper = props => {
  return (
    <NavBar>
      <Link to="/">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US//images/globalnav/apple/image_large.svg"
          alt=""
        />
      </Link>

      {props.navLinks.map(link => {
        return <Nav key={link.id} link={link} />;
      })}
      <a href="#">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US//images/globalnav/search/image_large.svg"
          alt=""
        />
      </a>
      <a href="#">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US//images/globalnav/bag/image_large.svg"
          alt=""
        />
      </a>
    </NavBar>
  );
};

export default NavWrapper;
