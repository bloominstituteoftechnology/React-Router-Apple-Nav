import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/image_large.svg";

const NavWrapper = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(20, 20, 20);
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 980px;

  p {
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
  }
`;
const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
`;

const Navbar = props => {
  return (
    <NavWrapper>
      <Nav>
        <Link to="/">
          <img src={Logo} />
        </Link>
        {props.links.map(link => (
          <StyledLink
            to={`/${link.name}`}
            activeStyle={{ color: "rgb(211,211,211)" }}
          >
            {link.name}
          </StyledLink>
        ))}
        <p> Support </p>
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" />
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" />
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
