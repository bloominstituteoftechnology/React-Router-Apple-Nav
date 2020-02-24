import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavBar = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #2c2c2c;
`;
const NavHodor= styled.div `
    display: flex;
    justify-content: space-between;
    widht: 80%;
    color: white;
`;

const NavWrapper = () => {
    return (
        <NavBar>
            <NavHodor>
                <NavLink to="/" className="links"><i class="fab fa-apple"></i></NavLink>
                <NavLink to="/" className="links">Mac</NavLink>
                <NavLink to="/" className="links">iPad</NavLink>
                <NavLink to="/" className="links">iPhone</NavLink>
                <NavLink to="/" className="links">Watch</NavLink>
                <NavLink to="/" className="links">TV</NavLink>
                <NavLink to="/" className="links">Music</NavLink>
                <NavLink to="/" className="links">Support</NavLink>
                <NavLink to="/" className="links"><i class="fas fa-search"></i></NavLink>
                <NavLink to="/" className="links"><i class="fas fa-shopping-bag"></i></NavLink>
            </NavHodor>
        </NavBar>
    );
};

export default NavWrapper;