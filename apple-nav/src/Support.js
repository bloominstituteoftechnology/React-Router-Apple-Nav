import React from 'react';
import { NavLink } from 'react-router-dom';

function Support() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <NavLink to="/contact">Contact Support</NavLink>
        </li>
        <li>
    <NavLink to="/support">Support</NavLink>
        </li>
        </ul>
    </div>
)
}
export default Support;