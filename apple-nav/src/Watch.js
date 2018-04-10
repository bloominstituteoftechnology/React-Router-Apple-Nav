import React from 'react';
import { Link } from 'react-router-dom';

function Watch() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <Link to="/apple-watch-3">Apple Watch Series 3</Link>
        </li>
        <li>
    <Link to="/apple-watch-nike">Apple Watch Nike+</Link>
        </li>
        <li>
    <Link to="/apple-watch-hermes">Apple Watch Hermes</Link>
        </li>
        <li>
    <Link to="/apple-watch-edition">Apple Watch Edition</Link>
        </li>
        <li>
    <Link to="/apple-watchos">watch OS</Link>
        </li>
        <li>
    <Link to="/bands">Bands</Link>
        </li>
        <li>
    <Link to="/accessroies">Accessories</Link>
        </li>
        <li>
    <Link to="/compare">Compare</Link>
        </li>
    </ul>
    </div>
)
}
export default Watch;