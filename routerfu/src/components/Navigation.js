import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="Nav-item">
      {/* <Nav className="App" /> */}
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/" exact>Home</NavLink>
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/mac">Mac</NavLink>
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/ipad">iPad</NavLink>
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/watch">Watch</NavLink>
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/tv">TV</NavLink>
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/music">Music</NavLink>
      <NavLink className="Nav-link" activeClassName="nav-link--active" to="/support">Support</NavLink>
    </div>
  );
};

export default Navigation;