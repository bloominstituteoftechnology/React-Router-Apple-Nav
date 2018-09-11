import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../data/navData';
import Nav from './Nav';

function NavWrapper(props) {

const navLinks = navData;
  return (
    <header>
    <nav>
      {navLinks.map(link => (
        <Nav {...props} name={navLinks.name}/>
      ))}
    </nav>
    </header>
  )
}


export default NavWrapper;
