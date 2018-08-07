import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    background: black;
    color: white;

    h5:hover{
        cursor: pointer;
        color: grey;
    }
`;


const Header = props => {
    return (
        <NavBarWrapper>
            <NavBar>
                {props.links.map(link => (
                    <h5>{link.product}</h5>
                ))}
            </NavBar>
        </NavBarWrapper>
    )
};

export default Header;