import React from 'react';
import styled from 'styled-components';
import TopMenuItem from './TopMenuItem';
import { Route, Link } from 'react-router-dom';
import SubCategory from './SubCategory';

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
        <div>
        <FlexDiv>
            {props.menu.map((topMenuItem, index) => {
               return <TopMenuItem {...props} id={index} item = {topMenuItem.title}/>
            })}
        </FlexDiv>
        <FlexDiv>
      <Route path={`/products/:title`} render={(routeProps) => (
          <SubCategory {...props} {...routeProps} /> 
          )}/>
       </FlexDiv>
        </div>
 
    );
};

export default NavWrapper;