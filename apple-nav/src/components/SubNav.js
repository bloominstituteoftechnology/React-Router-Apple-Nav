import React from 'react';
import { NavLink } from 'react-router-dom';



function SubNav(props) {
    const subMenu = subMenus.find(subMenu =>
    subMenu.id === props.match.params.id);
    return (
        <div className='sub-nav'>
            <ul className='sub-nav-items'>
                {subMenu.items.map(item => (
                <li className='sub-nav-item' key={subMenu.item}>
                    <NavLink 
                        exact activeClassName='activeSubNavButton' 
                        to={`/navbar/${subMenus.id}/${subMenu.item}`}
                    >
                    {subMenu.item}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SubNav;