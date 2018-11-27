import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import {Route} from 'react-router-dom';

const StyledNavWrapper = styled.div`
  width: 100%;
  background-color: #323232;
  color: white;
  height: 40px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
//<Nav name={d.name} subLinks={d.subLinks} />

const NavWrapper = props => {
  return (
    <div>
      <StyledNavWrapper>
        {props.data.map(d => (
          <Nav key={d.name} name={d.name} subLinks={d.subLinks} />
        ))}
      </StyledNavWrapper>
      {props.data.map(d => (
        <Route key={d.name}
          path={`/${d.name}`}
          render={props => <SubNav {...props} subLinks={d.subLinks} />}
        />
      ))}
    </div>
  );
};

export default NavWrapper;
