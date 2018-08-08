import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

const Nav = props => {
    return (
        <div className = "nav-item">
            <NavLink exact activeClassName = 'selected' to = {`/${props.name.toLowerCase()}`}>{props.name}</NavLink>
        </div>
    )
}

export default Nav; 