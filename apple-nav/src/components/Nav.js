import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const navName = props.name;
  return (
    <NavLink to={`/${props.name}`} activeClassName="activeNavButton">
    {navName}

    </NavLink>
  )
}

export default Nav;
