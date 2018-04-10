import React from 'react';
import { Link } from 'react-router-dom';

function Mac() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <Link to="/macbook">MacBook</Link>
        </li>
        <li>
    <Link to="/macbook-air">MacBook Air</Link>
        </li>
        <li>
    <Link to="/imac">iMac</Link>
        </li>
        <li>
    <Link to="/imac-pro">iMac Pro</Link>
        </li>
        <li>
    <Link to="/mac-pro">Mac Pro</Link>
        </li>
        <li>
    <Link to="/mac-mini">Mac mini</Link>
        </li>
        <li>
    <Link to="/accessroies">Accessories</Link>
        </li>
        <li>
    <Link to="/high-sierra">High Sierra</Link>
        </li>
        <li>
    <Link to="/compare">Compare</Link>
        </li>
    </ul>
    </div>
    )
    }
    export default Mac;