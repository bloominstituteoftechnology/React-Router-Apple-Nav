import React from 'react';
import { NavLink } from 'react-router-dom';

function Iphone() {
    return (
        <div className="Submenu">
        <ul>
            <li>
        <NavLink to="/iphone-x">iPhone X</NavLink>
            </li>
            <li>
        <NavLink to="/iphone-8">iPhone 8</NavLink>
            </li>
            <li>
        <NavLink to="/iphone-7">iPhone 7</NavLink>
            </li>
            <li>
        <NavLink to="/iphone-6">iPhone 6</NavLink>
            </li>
            <li>
        <NavLink to="/iphone-se">iPhone SE</NavLink>
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
export default Iphone;