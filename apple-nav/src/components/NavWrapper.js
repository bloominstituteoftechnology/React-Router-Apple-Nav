import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import {Route} from 'react-router-dom';

const StyledNavWrapper = styled.div`
  max-width: 100%;
  background-color: #323232;
  color: white;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;

  img {
  height: 3rem;
  padding-top: 0;
  }
`;

const NavWrapper = props => {
  return (
    <div>
      <StyledNavWrapper>
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt="apple"/>
        {props.data.map(d => (
          <Nav key={d.name} name={d.name} subLinks={d.subLinks} />
        ))}
        <Nav key='support' name='Support' />
        <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt="search"/>
      </StyledNavWrapper>
      {props.data.map(d => (
        <Route key={d.name}
          path={`/${d.name}`}
          render={props => <SubNav {...props} subLinks={d.subLinks} />}
        />
      ))}
      <h2>The Same Stuff As The Other Guys, But Twice As Expensive!</h2>
    </div>
  );
};

export default NavWrapper;
