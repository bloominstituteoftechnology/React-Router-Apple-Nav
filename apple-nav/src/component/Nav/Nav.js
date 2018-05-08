import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ id, name, icon }) => {
  console.log(icon);
  return (
    <div id={id} className="nav-block flex flex-column items-center">
      <img src={icon} alt={`${name} icon`} />
      <p>{name}</p>
    </div>
  );
}

export default Nav;