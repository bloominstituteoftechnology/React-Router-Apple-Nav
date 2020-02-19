import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavSubRoutes from './NavSubRoutes';
import HamburgerMenu from './HamburgerMenu';


const Container = styled.div`
    background: ${props => props.hamburgerMenu ? "#000000" : "#333333"};
    height: 50px;
`

const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    max-width: 1200px;
    margin: 0 auto;
    a {
        text-decoration: none;
        font-size: 16px;
        color: #E5E5E5;
    }

    .active { 
        color: #8B8B8B;

        img {
            filter: grayscale(1)
        }
    }

    @media (max-width: 800px) {
        display: none;
    }

    @media (min-width: 800px) {
        display: flex;
    }
`

const MobileNav = styled.nav`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    display: none;
    
    img:first-child {
        margin-left: 10px;
    }

    img:last-child { 
        margin-right: 10px;
        visibility: ${props => props.hamburgerMenu ? "hidden" : "visible"}
    }
    @media (max-width: 800px) {
        display: flex;
    }
`

const Icon = styled.img`
    height: 18px;
    width: 18px;
    cursor: pointer;
`


const NavBar = () => {

    const [ hamburgerMenu, setHamburgerMenu ] = useState(false)
    const [ windowWidth, setWindowWidth ] =useState(window.innerWidth)

    useEffect(() => {

        if (windowWidth > 800) {
            setHamburgerMenu(false)
        }
        const getWindowWidth = setInterval(() => {
            setWindowWidth(window.innerWidth)
        }, 1)
       
        return function cleanup() {
            clearInterval(getWindowWidth)
        }
    }, [windowWidth])
    
    console.log(windowWidth)
    return (
        <Container hamburgerMenu={hamburgerMenu}>
            <Nav>
                <Icon src={require('../images/apple.png')} />
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
            <MobileNav hamburgerMenu={hamburgerMenu}>
                {!hamburgerMenu ? <Icon onClick={() => setHamburgerMenu(!hamburgerMenu)} src={require("../images/hamburger-icon.png")} /> : <Icon onClick={() => setHamburgerMenu(!hamburgerMenu)} src={require("../images/hamburger-icon.png")} />}
                <Icon src={require('../images/apple.png')} />
                <NavLink to="/Clipboard"><Icon src={require("../images/clipboard.png")} /></NavLink>
            </MobileNav>
            <ReactCSSTransitionGroup
                transitionName="menuSlide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeave={true}
                transitionLeaveTimeout={500}
            >
                {!hamburgerMenu ? null : <HamburgerMenu />}
            </ReactCSSTransitionGroup>
            {!hamburgerMenu ? <NavSubRoutes /> : null}
        </Container>
    );
}


export default NavBar;
