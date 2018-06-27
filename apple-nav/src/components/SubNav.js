import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const SubNav = props => {
  console.log("SubNav", props);
  return (
    <div>
      {props.subNav.map(subNavItem => (
        <div>{subNavItem}</div>
      ))}
    </div>
  );
}

export default SubNav;
