import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            <Link exact to='/'><button className="homebtn"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"/></button></Link>
             {props.menu.map(nav => (<Nav nav={nav} />))}
        </div>
    )
}

export default NavWrapper;