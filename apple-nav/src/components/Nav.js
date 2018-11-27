import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const StyledNav = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: gray;
  }
`;

const Nav = props => {
  return <StyledNav to={`/${props.name}`}>{props.name}</StyledNav>;
};

export default Nav;
