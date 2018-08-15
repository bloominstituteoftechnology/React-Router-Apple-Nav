import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='inner-bar'>
            <ul className='nav-items'>
                {props.categories.map(category => (
                <li className='nav-item' key={category.id}>
                    <NavLink activeClassName='activeNavButton' to={`/navbar/${category.id}`}>
                        {category.name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;