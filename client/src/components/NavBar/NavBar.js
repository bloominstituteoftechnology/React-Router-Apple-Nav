import React from 'react';
import './NavBar.css';
import mockData from '../../NavData';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        {Object.keys(mockData).map((mockKey, i) => {
          return (<NavLink to={`/${mockKey}`} className="navItem" key={i}>{mockKey}</NavLink>);
        })}
      </div>
    );
  }
}

export default NavBar;
