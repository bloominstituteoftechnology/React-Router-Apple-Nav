import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css'


class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div className="Container">
          <div className="Header">
            <NavLink to={'/mac'}> Mac</NavLink>
            <br/>
            <NavLink to={'/ipad'}> iPad</NavLink>
          </div>
        </div>
    );
  }
}



export default Main;