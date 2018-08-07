import React from "react";
import { Link } from "react-router-dom";
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
  width: 980px;
  max-width: 980px;
`;
const StyledLink = styled(Link)`
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
          <StyledLink to={`/${link.name}`}>{link.name}</StyledLink>
        ))}
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
