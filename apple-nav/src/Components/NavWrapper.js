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
                <NavLink to="/mac" className="links">Mac</NavLink>
                <NavLink to="/ipad" className="links">iPad</NavLink>
                <NavLink to="/iphone" className="links">iPhone</NavLink>
                <NavLink to="/watch" className="links">Watch</NavLink>
                <NavLink to="/tv" className="links">TV</NavLink>
                <NavLink to="/music" className="links">Music</NavLink>
                <NavLink to="/support" className="links">Support</NavLink>
                <i class="fas fa-search search"></i>
                <i class="fas fa-shopping-bag search"></i>
            </NavHodor>
        </NavBar>
    );
};

export default NavWrapper;