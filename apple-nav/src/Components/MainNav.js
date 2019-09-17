import React from 'react';
import { NavLink } from 'react-router-dom'

function MainNav() {
    return(
        <div className='main-nav'>
            <ul>
                <li>
                    <NavLink exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/fresh-fruits'>Fresh Fruits</NavLink>
                </li>
                <li>
                    <NavLink to='/desserts'>Desserts</NavLink>
                </li>
                <li>
                    <NavLink to='/tools'>Tools</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MainNav;