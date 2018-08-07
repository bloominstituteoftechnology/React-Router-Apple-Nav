import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav=prop=>{
    return (
        <li>
            <NavLink activeClassName='activeNavLink' to={`/${prop.data}`}>{prop.data}</NavLink>
        </li>
    )
}
export default Nav;