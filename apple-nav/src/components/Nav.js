import React from 'react';
import { } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav-sub-row'>
            <ul className='sub-nav-items'>
                <li className='sub-nav-item'>
                    <NavLink 
                        exact activeClassName='activeSubNavButton' 
                        to={`/navItems/${navItem.id}/${subNavItem.id}`}
                     />
                </li>
            </ul>
        </div>
    );
}

export default Nav;