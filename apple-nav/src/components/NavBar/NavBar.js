import React from 'react';
import { NavLink } from 'react-router-dom';

import NavButton from './NavButton';

import './NavBar.css';

const NavBar = props => {
    console.log(props.buttons);
    if(!props.buttons.length) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="nav-bar-background">
            <div className="nav-bar-container">
                {props.buttons.map((button) => <NavLink exact activeClassName="active-nav-link" to={`/${button.id}`}><NavButton id={button.id} content={button.content} /></NavLink>)}
            </div>
        </div>
    );
}

export default NavBar;