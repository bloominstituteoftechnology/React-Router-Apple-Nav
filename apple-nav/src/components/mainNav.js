import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function mainNav(props) {
    return (
        <div>
            <div><NavLink exact to={`/${props.link.name}`} className='mainLinks' >{props.link.name}</NavLink></div>
            
        </div>       
    );

}

export default mainNav;