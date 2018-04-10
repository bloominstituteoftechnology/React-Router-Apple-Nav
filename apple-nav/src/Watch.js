import React from 'react';
import { NavLink } from 'react-router-dom';

function Watch() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <NavLink to="/apple-watch-3">Apple Watch Series 3</NavLink>
        </li>
        <li>
    <NavLink to="/apple-watch-nike">Apple Watch Nike+</NavLink>
        </li>
        <li>
    <NavLink to="/apple-watch-hermes">Apple Watch Hermes</NavLink>
        </li>
        <li>
    <NavLink to="/apple-watch-edition">Apple Watch Edition</NavLink>
        </li>
        <li>
    <NavLink to="/apple-watches">watch OS</NavLink>
        </li>
        <li>
    <NavLink to="/bands">Bands</NavLink>
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
export default Watch;