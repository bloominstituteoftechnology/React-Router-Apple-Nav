import React from 'react';
import Nav from './Nav';
import './NavContainer.css';

const NavElements = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

const NavContainer = (props) => {
    return (
        <div className="nav-container">
            <div className="main-nav">
                {NavElements.map(element => <Nav key={element} name={element} />)}
            </div>
        </div>
    )
}

export default NavContainer;