import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.section`
    width: 100%;
    height: 45px;
    background: #313131;
`;

const Bar = styled.section`
    height: 100%;
    width: 75%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 300;

        &:hover {
            color: #888888;
        }
    }
    .logo {
        font-size: 2.2rem;
    }
    .active-nav {
        color: #B6B6B6;
    }
`;

const Icon = styled.span`
    color: #FFFFFF;
    font-size: 1.6rem;
    cursor: pointer;

    &:hover {
        color: #888888;
    }
`;

//////////////////////////////////////////////////////////////////////////////////

const NavBar = props => (
    <NavContainer>
        <Bar>
            <Icon className="fab fa-apple logo" onClick={() => props.history.push('/')}></Icon>
            <NavLink to="/mac" activeClassName="active-nav">Mac</NavLink>
            <NavLink to="/ipad" activeClassName="active-nav">iPad</NavLink>
            <NavLink to="/iphone" activeClassName="active-nav">iPhone</NavLink>
            <NavLink to="/watch" activeClassName="active-nav">Watch</NavLink>
            <NavLink to="/tv" activeClassName="active-nav">TV</NavLink>
            <NavLink to="/music" activeClassName="active-nav">Music</NavLink>
            <NavLink to="/support" activeClassName="active-nav">Support</NavLink>
            <Icon className="fas fa-search"></Icon>
            <Icon className="fas fa-shopping-bag"></Icon>
        </Bar>
    </NavContainer>
);

export default NavBar;