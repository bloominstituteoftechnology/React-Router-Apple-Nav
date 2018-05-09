import React from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const Nav = (props) => (
  <li className="nav-item">
    <a className="nav-link text-white" href="#">{props.navLink}</a>
  </li>
);

export default Nav;