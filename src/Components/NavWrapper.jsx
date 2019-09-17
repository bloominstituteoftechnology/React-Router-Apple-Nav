import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  width: 100%
  display: flex;
  background: black;
  opacity: 0.8;
`;

const Nav = styled.ul`
  width: 55%;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  height: 44px;
  align-items: center;
`;

function NavWrapper() {
  return (
    //
    <NavContainer>
      <Nav>
        <Link to="/">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" />
        </Link>

        <Link to="/mac">Mac</Link>

        <Link to="/ipad">iPad</Link>

        <Link to="/iphone">iPhone</Link>

        <Link to="/watch">Watch</Link>

        <Link to="/tv">TV</Link>

        <Link to="/music">Music</Link>

        <Link to="/support">Support</Link>

        {/* Search and Cart modals*/}

        <Link to="/search">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" />
        </Link>

        <Link to="/cart">
          <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" />
        </Link>
      </Nav>
    </NavContainer>
  );
}

export default NavWrapper;
