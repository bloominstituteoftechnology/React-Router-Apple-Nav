import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled(NavLink)`
  color: white;
`;

const Nav = props => {
  return <StyledNav to="/">{props.name}</StyledNav>;
};

export default Nav;
