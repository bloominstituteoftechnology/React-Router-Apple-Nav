import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className='inner-bar'>
            <ul className='nav-items'>
                {subMenus.map(subMenu => (
                <li className='nav-item' key={subMenus.id}>
                    <NavLink activeClassName='activeNavButton' to={`/navbar/${subMenus.id}`}>
                        {subMenus.name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;