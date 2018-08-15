import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='inner-bar'>
            {props.categories.map(category => (
            <div className='nav-item' key={category.id}>
                <NavLink activeClassName='activeNavButton' to={`/navbar/${category.id}`}>
                    {category.name}
                </NavLink>
            </div>
            ))}
        </div>
    );
}

export default Nav;