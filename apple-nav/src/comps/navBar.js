import React from 'react';
import MainTab from './mainTab.js';
import {Link} from 'react-router-dom';
import './navBar.scss';

const NavBar = props => {
  return (
    <div className="navBar">
      <Link to="/">
        <i className="fab fa-apple" />
      </Link>
      {props.data.map(mainTab => {
        return (
          <div key={mainTab.name}>
            <MainTab tab={mainTab.name} />
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
