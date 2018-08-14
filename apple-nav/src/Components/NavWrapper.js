import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            <Link exact to='/'></Link>
        </div>
    )
}

export default NavWrapper;