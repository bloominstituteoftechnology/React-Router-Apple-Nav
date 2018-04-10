import React from 'react';
import { Link } from 'react-router-dom';

function Tv() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <Link to="/apple-tv-4k">Apple TV 4k</Link>
        </li>
        <li>
    <Link to="/apple-tv">Apple TV</Link>
        </li>
        <li>
    <Link to="/tv-app">Ipad-Mini 4</Link>
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
export default Tv;