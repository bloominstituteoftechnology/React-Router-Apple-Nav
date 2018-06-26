import React, { Component } from 'react';
import '../App.css';

const NavLink = props => {
  return (
    <div>
      {props.link.name}
    </div>
  );
}

export default NavLink;
