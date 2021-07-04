import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.header`
  width: 100%;
  height: 50px;
  background: #2F2F2F;
  color: #FFF;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  max-width: 880px;
  margin: 0 auto;
  height: 100%;

  &>li>a{
    text-decoration: none;
    color: #FFF;
    font-size: 1.4rem;
    font-weight: lighter;
  }
`;

const NavWrapper = props => {
  return(
    <Navigation>
      <NavList>
        <li><Link to="/">Home</Link></li>
        {props.navigation.map(nav =>
          <li>
            <Link to={`/${nav.text}`}>
              {nav.text}
            </Link>
          </li>)}
      </NavList>
    </Navigation>
  );
}

export default NavWrapper;
