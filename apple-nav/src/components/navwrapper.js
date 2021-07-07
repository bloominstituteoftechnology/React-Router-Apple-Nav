import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapperDiv = styled.div`
    height: 48px;
    background: #323232;
    color: white;
`

const NavContent = styled.ul`
    height: 100%;
    padding: 0;
    margin: 0 5%;
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    letter-spaceing: -0.1em;
    font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    &:hover{
        color: darkgray;
        cursor: pointer;
    }
`

const LiApple = styled.li`
    width:20px;
    background-size: 20px 44px;
    background-repeat: no-repeat;
    background-image: url(../iamges/apple.jpeg);
    bacground-position: center center;
`

const NavWrapper = (props) => {
    return (
        <NavWrapperDiv>
            <NavContent>
                <li>
                    <StyledNavLink to='/'>Apple</StyledNavLink>
                </li>
                {props.navLinks.map(link => {
                    const category = Object.keys(link)[0];
                    return (
                        <li key={category}>
                            <StyledNavLink to={`/${category}`} activeStyle={{ 'color': 'darkgray' }}>{category}</StyledNavLink>
                        </li>
                    )
                })}
                <li>
                    <StyledNavLink to='/'>Search</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/'>Cart</StyledNavLink>
                </li>
            </NavContent>
        </NavWrapperDiv >
    )
};

export default NavWrapper;