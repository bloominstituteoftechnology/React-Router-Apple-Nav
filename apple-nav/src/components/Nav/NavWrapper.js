import React from 'react';
import styled from 'styled-components';
import TopMenuItem from './TopMenuItem';
import { Link } from 'react-router-dom';

let FlexDiv = styled.div`
display: flex;
margin: 0 auto;
width: 100%;
background-color: #141414;
height: 50px;
color: white;
justify-content: space-around;
align-items: center;
`

const NavWrapper = (props) => {
    return (
        <FlexDiv>
            {props.menu.map((topMenuItem, index) => {
               return <Link to='/'> <TopMenuItem {...props} id={index} key={Math.random()} item = {topMenuItem.title}/> </Link>
            })}
        </FlexDiv>
    );
};

export default NavWrapper;