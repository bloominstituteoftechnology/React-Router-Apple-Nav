import React from 'react';
import styled from 'styled-components';
const SubNavWrapper=styled.div`
max-width: 800px;
width: 100%;
height: 100px;
margin: 0 auto;
background-color: #708090;
opacity: 0.8;
display: flex;
align-items: center;
justify-content: space-evenly;
list-style-type: none;
`;
const Subnav=prop=>{
    const item=prop.items.find(item=>item.item===prop.match.params.item)
    return(
    <SubNavWrapper>
        <i className={`${item.icon1}`}></i>
        <i className={`${item.icon2}`}></i>
    </SubNavWrapper>
    )
}
export default Subnav;