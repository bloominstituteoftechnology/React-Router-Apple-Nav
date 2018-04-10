import React from 'react';
import { NavLink } from 'react-router-dom';

function Mac() {
return (
    <div className="Submenu">
    <ul>
        <li>
    <NavLink to="/macbook">MacBook</NavLink>
        </li>
        <li>
    <NavLink to="/macbook-air">MacBook Air</NavLink>
        </li>
        <li>
    <NavLink to="/imac">iMac</NavLink>
        </li>
        <li>
    <NavLink to="/imac-pro">iMac Pro</NavLink>
        </li>
        <li>
    <NavLink to="/mac-pro">Mac Pro</NavLink>
        </li>
        <li>
    <NavLink to="/mac-mini">Mac mini</NavLink>
        </li>
        <li>
    <NavLink to="/accessroies">Accessories</NavLink>
        </li>
        <li>
    <NavLink to="/high-sierra">High Sierra</NavLink>
        </li>
        <li>
    <NavLink to="/compare">Compare</NavLink>
        </li>
    </ul>
    </div>
    )
    }
    export default Mac;