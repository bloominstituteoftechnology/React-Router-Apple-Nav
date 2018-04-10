import React from 'react';
import { NavLink } from 'react-router-dom';

function Music() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <NavLink to="/apple-music">Apple Music</NavLink>
        </li>
        <li>
    <NavLink to="/itunes">iTunes</NavLink>
        </li>
        <li>
    <NavLink to="/homepod">HomePod</NavLink>
        </li>
        <li>
    <NavLink to="/ipod-touch">iPod touch</NavLink>
        </li>
        <li>
    <NavLink to="/accessroies"> Music Accessories</NavLink>
        </li>
        <li>
    <NavLink to="/gift-cards">Gift Cards</NavLink>
        </li>
    </ul>
    </div>
)
}
export default Music;