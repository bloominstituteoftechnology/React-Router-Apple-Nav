import React from 'react';
import { NavLink } from 'react-router-dom';

function Support() {
  return (
    <div className="Submenu">
      <NavLink to="/contact">Contact Support</NavLink>
      <NavLink to="/support">Support</NavLink>
    </div>
  )
}
export default Support;