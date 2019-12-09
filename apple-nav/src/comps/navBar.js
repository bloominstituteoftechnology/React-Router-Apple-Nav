import React from 'react';
import MainTab from './mainTab.js';
import {Link} from 'react-router-dom';
import './navBar.scss';
import {TweenLite, CSSPlugin} from 'gsap/all';

const NavBar = props => {
  return (
    <div className="navBar">
      <Link to="/">
        <i className="fab fa-apple" />
      </Link>
      {props.data.map((mainTab, index) => {
        return (
          <div key={mainTab.name} className="mT">
            <MainTab {...props} tab={mainTab.name} />
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
