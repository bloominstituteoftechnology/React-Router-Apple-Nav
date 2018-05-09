import React from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';


const SubNav = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#"><img src="./assets/imac-pro.png" />{props.navLink}</a>
    </li>
  );
};

export default SubNav;