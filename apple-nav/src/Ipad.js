import React from 'react';
import { NavLink } from 'react-router-dom';

function Ipad() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <NavLink to="/ipad-pro">Ipad-Pro</NavLink>
        </li>
        <li>
    <NavLink to="/ipad">Ipad</NavLink>
        </li>
        <li>
    <NavLink to="/ipad-mini">Ipad-Mini 4</NavLink>
        </li>
        <li>
    <NavLink to="/ios">iOS 11</NavLink>
        </li>
        <li>
    <NavLink to="/accessroies">Accessories</NavLink>
        </li>
        <li>
    <NavLink to="/compare">Compare</NavLink>
        </li>
    </ul>
    </div>
)
}
export default Ipad;