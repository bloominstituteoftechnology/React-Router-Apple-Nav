import React from 'react';
import Nav from './Nav';
import styled from "styled-components";
import apple from '../img/apple.svg';
import search from '../img/search.svg';
import bag from '../img/bag.svg';

const StyledNav = styled(Nav)`
    font-size: 14px;
    line-height: 3.14286;
    font-weight: 400;
    letter-spacing: -.01em;
    font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    color: #fff;
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 10px;
    height: 44px;
    opacity: 1;
    background: no-repeat;
    text-decoration: none;
    white-space: nowrap;
    -webkit-transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-tap-highlight-color: transparent;
    outline-offset: -7px;
`;

const Inside = styled.div`
    cursor: default;
    margin: 0 -10px;
    width: auto;
    height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    `;

const NavWrapper = (props) => {
    return (
        <nav className={props.className}>
            <Inside>
                <StyledNav page="" image={apple}/>
                <StyledNav page="mac" text="Mac"/>
                <StyledNav page="ipad" text="iPad"/>
                <StyledNav page="iphone" text="iPhone"/>
                <StyledNav page="watch" text="Watch"/>
                <StyledNav page="tv" text="TV"/>
                <StyledNav page="music" text="Music"/>
                <StyledNav page="support" text="Support"/>
                <StyledNav page="search" image={search}/>
                <StyledNav page="bag" image={bag}/>
            </Inside>
        </nav>
    )
}

export default NavWrapper;