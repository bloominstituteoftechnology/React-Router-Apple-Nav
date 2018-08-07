import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav=prop=>{
    return (
        <li>
            <NavLink activeClassName='activeNavLink' to={`/${prop.data.item}`}>{prop.data.item}</NavLink>
        </li>
    )
}
export default Nav;