import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.header`
    width: 100%;
  height: 48px;
  background: rgba(0,0,0,.8);
  color: #FFF;
`
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
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
    font-size: 14px;
  }
`;

const NavWrapper = props => {
  return(
    <Nav>
        <NavList>
        <li><Link to='/'>Home</Link></li>
        {props.navigation.map(nav => 
            <li>
            <Link to={`/${nav.text}`}>
                {nav.text}
            </Link>
            </li>
        )}
        </NavList>
    </Nav>
  );
}

export default NavWrapper;