import React from 'react';
import { NavLink } from 'react-router-dom';

const Mac = () =>  (
  <div>
    <div className="sub_nav" style={{backgroundColor: 'dimgray'}}>
      <NavLink className="nav_link" to='/macbook'>MacBook</NavLink>
      <NavLink className="nav_link" to='/macbook-pro'>MacBook Pro</NavLink>
      <NavLink className="nav_link" to='/macbook-air'>MacBook Air</NavLink>
    </div>
    <h4> Mac </h4>
  </div>
);

export default Mac;