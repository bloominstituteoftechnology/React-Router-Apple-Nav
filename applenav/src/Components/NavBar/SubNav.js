import React, { Component } from 'react';
import './NavBar.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = props => {
  console.log(props);
  return (
    <nav id="nav" className="main-nav">
        {props.data.map(item => (
          <div>
            <Link to={`/${item.name}`} key={item.id}>
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
  );
};

export default NavBar;
