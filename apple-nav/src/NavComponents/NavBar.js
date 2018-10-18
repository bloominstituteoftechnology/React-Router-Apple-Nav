import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import appleLogo from '../Assets/apple-logo.png'

const NavBarWrapper = Styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 1024px;
    width: 100%;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    font-size: 17px;
`;
const NavItems = Styled.div`
    margin: 0 auto;
    max-width: 980px;
    width: 100%;
    padding: 0 22px;
    display flex;
    align-items: center;
    justify-content: space between;
`;
const StyledLink = Styled(Link)`
    color: white;
    text-decoration: none;
    padding-right: 100px;
    img {
        width: 25px;
        height: 25px;
    };

    :last-child {
        padding-right: 0px;
    }
`;

const NavBar = (props) => {
    return (
        <NavBarWrapper>
            <NavItems>
                <StyledLink to="/"><img src={appleLogo}/></StyledLink>
                <StyledLink to="/mac">Mac</StyledLink>
                <StyledLink to="/ipad">iPad</StyledLink>
                <StyledLink to="/iphone">iPhone</StyledLink>
                <StyledLink to="/watch">Watch</StyledLink>
                <StyledLink to="/tv">TV</StyledLink>
                <StyledLink to="/music">Music</StyledLink>
                <StyledLink to="/support">Support</StyledLink>
            </NavItems>
        </NavBarWrapper>
    );
};

export default NavBar;