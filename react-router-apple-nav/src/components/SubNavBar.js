import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

import HamburgerMenu from './HamburgerMenu';

const Container = styled.div`
    width: 100%;
    background: #F9F9FA;
    button {
        border: none;
        position: absolute;
        top: 60px;
        color: #333333;
        font-size: 20px;
    }
    .right-button {
        border-right: 1px solid lightgray;
        position: absolute;
    }
    .left-button {
        border-left: 1px solid lightgray;
        left: 93%;
    }
`

const Nav = styled.nav`
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: center;
    position: relative;
    transition: .25s linear;
    transform: translateX(${props => props.scroll}px);
    @media (min-width: 800px) {
        transform: translateX(0px);
    }

    @media (max-width: 800px) {
        justify-content: flex-start;
    }
`

const NavButton = styled.button`
    background: #F9F9FA;
    border: none;
    display: none;
    height: 90px;
    padding: 20px;
    @media (max-width: 800px) {
        display: block;
    }
`

const SubNavBar = ({ navImg }) => {
    const [ scroll, setScroll ]  = useState(0)
    const [ menu, setMenu ] = useState(false)

    const handleSetScroll = (scrollAmount) => {
        const checkMaxScroll = Math.abs(scroll - scrollAmount) < 900
        if (checkMaxScroll) {
            setScroll(scroll - scrollAmount)
        }
    }

    return (
        <Container>
            <Nav scroll={scroll}>
                <img className="sub-nav-img" src={navImg} />
            </Nav>
            {scroll < 0 ? <NavButton className='right-button' onClick={() => handleSetScroll(-300)}> {'<'} </NavButton> : null}
            {scroll > -600 ?  <NavButton className='left-button' onClick={() => handleSetScroll(300)}> > </NavButton> : null}
        </Container>
    );
}

export default SubNavBar;
