import React from 'react';
import styled from 'styled-components';

const NavWrapperDiv = styled.div`
    height: 48px;
    background: #323232;
    color: white;
`;

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
`;

const Li = styled.li`
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


const NavWrapper = () => {
    return (
        <NavWrapperDiv>
            <NavContent>
                <LiApple>Apple</LiApple>
                <Li>Mac</Li>
                <Li>iPad</Li>
                <Li>iPhone</Li>
                <Li>Watch</Li>
                <Li>TV</Li>
                <Li>Music</Li>
                <Li>Supoort</Li>
                <Li>Search</Li>
                <Li>Cart</Li>
            </NavContent>
        </NavWrapperDiv>
    )
};

export default NavWrapper;