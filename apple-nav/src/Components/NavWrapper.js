import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            <Link exact to='/'><button className="homebtn"></button></Link>
             {props.menu.map(nav => (<Nav nav={nav} />))}
        </div>
    )
}

export default NavWrapper;