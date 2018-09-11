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
        <Nav {...props} link={link}/>
      ))}
    </nav>
    </header>
  )
}


export default NavWrapper;
