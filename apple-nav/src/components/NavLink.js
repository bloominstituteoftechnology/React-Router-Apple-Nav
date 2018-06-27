import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import SubNav from './SubNav';

const NavLink = props => {
  console.log("NavLink", props);
  return (
    <div>
      <Link to={`${props.link.name}`} key={Math.random()}>
        {props.link.name}
      </Link>
    </div>
  );
}

export default NavLink;
