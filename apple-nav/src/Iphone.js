import React from 'react';
import { Link } from 'react-router-dom';

function Iphone() {
    return (
        <div className="Submenu">
        <ul>
            <li>
        <Link to="/iphone-x">iPhone X</Link>
            </li>
            <li>
        <Link to="/iphone-8">iPhone 8</Link>
            </li>
            <li>
        <Link to="/iphone-7">iPhone 7</Link>
            </li>
            <li>
        <Link to="/iphone-6">iPhone 6</Link>
            </li>
            <li>
        <Link to="/iphone-se">iPhone SE</Link>
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
export default Iphone;