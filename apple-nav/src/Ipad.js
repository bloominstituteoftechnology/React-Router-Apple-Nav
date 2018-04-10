import React from 'react';
import { Link } from 'react-router-dom';

function Ipad() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <Link to="/ipad-pro">Ipad-Pro</Link>
        </li>
        <li>
    <Link to="/ipad">Ipad</Link>
        </li>
        <li>
    <Link to="/ipad-mini">Ipad-Mini 4</Link>
        </li>
        <li>
    <Link to="/ios">iOS 11</Link>
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
export default Ipad;