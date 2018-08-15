import React from 'react';
import { NavLink } from 'react-router-dom';

import navItems from '../../data';

function SubNav(props) {
    return (
        <div className='sub-navbar'>
            <ul className='sub-nav-items'>
                {nav.subNav.map(subNav => (
                <li className='sub-nav-item' key={nav.subNav.id}>
                    <NavLink 
                        exact activeClassName='activeSubNavButton' 
                        to={`/nav/${nav.id}/${nav.subNav.id}`}
                    >
                    {nav.subNav.name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SubNav;