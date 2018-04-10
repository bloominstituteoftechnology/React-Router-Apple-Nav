import React from 'react';
import { NavLink } from 'react-router-dom';

function Watch() {
return (
    <div className="Submenu">
    <NavLink to="/apple-watch-3">Apple Watch Series 3</NavLink>
    <NavLink to="/apple-watch-nike">Apple Watch Nike+</NavLink>
    <NavLink to="/apple-watch-hermes">Apple Watch Hermes</NavLink>
    <NavLink to="/apple-watch-edition">Apple Watch Edition</NavLink>
    <NavLink to="/apple-watches">watch OS</NavLink>
    <NavLink to="/bands">Bands</NavLink>
    <NavLink to="/accessroies">Accessories</NavLink>
    <NavLink to="/compare">Compare</NavLink>
    </div>
)
}
export default Watch;