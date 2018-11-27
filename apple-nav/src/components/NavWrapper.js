import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';

const StyledNavWrapper = styled.div`
  width: 100%;
  background-color: #323232;
  color: white;
  height: 40px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  position: fixed;
`;
        //<Nav name={d.name} subLinks={d.subLinks} />

const NavWrapper = props => {
  return (
    <div>
    {props.data.map(d => (
        <Route path={`/${d.name}`}
          render={props => <SubNav {...props} subLinks={d.subLinks} />}
        />
    ))}
    <StyledNavWrapper>
      {props.data.map(d => (
        <Nav name={d.name} subLinks={d.subLinks} />
      ))}
    </StyledNavWrapper>
  </div>
  )
}

export default NavWrapper;
