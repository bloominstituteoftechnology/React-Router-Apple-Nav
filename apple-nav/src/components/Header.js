import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    background: black;
    color: white;
    align-items: center;

    h5:hover{
        cursor: pointer;
        color: grey;
    }
`;


const Header = props => {
    return (
        <NavBarWrapper>
            <NavBar>
                <span class="fab fa-apple"></span>
                {props.links.map(link => (
                    <p>{link.product}</p>
                ))}
                <p>Support</p>
                <span class="fas fa-search"></span>
                <span class="fas fa-shopping-bag"></span>
            </NavBar>
        </NavBarWrapper>
    )
};

export default Header;