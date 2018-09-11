import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const SubNavWrapper=styled.div`
max-width: 800px;
width: 100%;
margin:0 auto;
display: flex;
align-items: center;
justify-content: space-evenly;
`;
const Subnav = prop => {
    const item = prop.items.find(item => item.item === prop.match.params.item)
    return (
        <SubNavWrapper>
            <NavLink to='/'><i className={`${item.icon1}`}></i></NavLink>
            <NavLink to='/'><i className={`${item.icon2}`}></i></NavLink>
        </SubNavWrapper>
    )
}
export default Subnav;
