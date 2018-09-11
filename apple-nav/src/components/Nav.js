import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const navName = props.name;
  return (
    <NavLink to={`${props.link.url}`} activeClassName="activeNavButton">
    {props.link.name}

    </NavLink>
  )
}

export default Nav;
