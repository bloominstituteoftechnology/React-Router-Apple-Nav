import React from 'react';

import styled from 'styled-components';

import { NavLink, Route } from 'react-router-dom';
import SubNavBar from './SubNavBar';

const Container = styled.div`
    margin: 0 auto;
    width: 800px;
    background: #333333;
    height: 40px;
`

const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 40px;
    a {
        text-decoration: none;
        font-size: 14px;
        color: #E5E5E5;
        
    }

    .active { 
        color: #8B8B8B;

        img {
            -webkit-filter: grayscale(1)
        }
    }
`

const Icon = styled.img`
    height: 15px;
    width: 15px;
`


const NavBar = () => {
  return (
    <Container>
        <Nav>
            <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png" />
            <NavLink to="/Mac">Mac</NavLink>
            <NavLink to="/iPad">iPad</NavLink>
            <NavLink to="/iPhone">iPhone</NavLink>
            <NavLink to="/Watch">Watch</NavLink>
            <NavLink to="/TV">TV</NavLink>
            <NavLink to="/Music">Music</NavLink>
            <NavLink to="/Support">Support</NavLink>
            <NavLink to="/Search"><Icon src={require("../images/search.png")} /></NavLink>
            <NavLink to="/Clipboard"><Icon src={require("../images/clipboard.png")} /></NavLink>
        </Nav>
        <Route path="/Mac" component={SubNavBar} />
    </Container>
  );
}


export default NavBar;
