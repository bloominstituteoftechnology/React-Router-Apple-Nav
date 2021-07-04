import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="NavAll">
              <div className="Nav">
              <NavLink to="/" className="NavHome">
                <i class="fab fa-apple"></i>
              </NavLink>
              <NavLink to="/mac" className="NavItems">
                Mac
              </NavLink>
              <NavLink to="/ipad" className="NavItems">
                iPad
              </NavLink>
              <NavLink to="/iphone" className="NavItems">
                iPhone
              </NavLink>
              <NavLink to="/watch" className="NavItems">
                Watch
              </NavLink>
              <NavLink to="/tv" className="NavItems">
                TV
              </NavLink>
              <NavLink to="/music" className="NavItems">
                Music
              </NavLink>
              <NavLink to="/support" className="NavItems">
                Support
              </NavLink>
              <NavLink to="/search" className="NavItems">
                <i class="fas fa-search"></i>
              </NavLink>
              <NavLink to="/shopping" className="NavItems">
                <i class="fas fa-shopping-bag"></i>
              </NavLink>
              </div>
          </div>
        )
    }
}