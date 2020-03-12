import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const StyledNavWrapper = styled.div`
  width: 100%;
  background-color: #323232;
  color: white;
  height: 40px;
  display: flex;
`;

const NavWrapper = props => {
  return (
    <StyledNavWrapper>
      <Nav name={'test'} />
    </StyledNavWrapper>
  )
}

export default NavWrapper;