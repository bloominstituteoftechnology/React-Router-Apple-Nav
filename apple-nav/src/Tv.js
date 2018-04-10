import React from 'react';
import { NavLink } from 'react-router-dom';

function Tv() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <NavLink to="/apple-tv-4k">Apple TV 4k</NavLink>
        </li>
        <li>
    <NavLink to="/apple-tv">Apple TV</NavLink>
        </li>
        <li>
    <NavLink to="/tv-app">Ipad-Mini 4</NavLink>
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
export default Tv;