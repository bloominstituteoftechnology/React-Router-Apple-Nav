import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBarWrapper = styled.div`
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    background: black;
    color: white;
    align-items: center;

    p:hover{
        color: grey;
    }
`;

const NavigationLink = styled(NavLink)`
    color: white;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        color: grey;
    }
`;

const Header = props => {
    return (
        <NavBarWrapper>
            <NavBar>
                <p className="fab fa-apple"></p>
                {props.links.map(link => (
                    <NavigationLink to={`/${link.product}`} activeClassName="selected">{link.product}</NavigationLink>
                ))}
                {/* <p>Support</p> */}
                <p className="fas fa-search"></p>
                <p className="fas fa-shopping-bag"></p>
            </NavBar>
        </NavBarWrapper>
    )
};

export default Header;