import React from 'react'
import { NavLink } from 'react-router-dom';

import navItems from '../../data';

function Nav(props) {
    return (
        <div className='navbar'>
            <ul className='nav-items'>
                <li className='icon'>
                    <NavLink exact activeClassName='activeNavButton' to='/nav'>
                        icon
                    </NavLink>
                </li>
                {props.nav.map(nav => (
                <li className='nav-item' key={nav.id}>
                    <NavLink activeClassName='activeNavButton' to={`/nav/${nav.id}`}>
                        {nav.name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;