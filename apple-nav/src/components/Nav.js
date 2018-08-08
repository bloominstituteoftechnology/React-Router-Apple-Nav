import React from 'react';

import {NavLink} from 'react-router-dom'

const Nav = (props) => {
    
    
        return(
            <ul className = "nav">
                {props.link.map(link => (
                    <li>
                        <NavLink exact activeClassName = 'activeLink' to = {`/${link.id}`}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        )
    
}

export default Nav