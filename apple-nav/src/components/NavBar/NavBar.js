import React from 'react';

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
                {props.buttons.map((button) => <NavButton id={button.id} content={button.content} />)}
            </div>
        </div>
    );
}

export default NavBar;