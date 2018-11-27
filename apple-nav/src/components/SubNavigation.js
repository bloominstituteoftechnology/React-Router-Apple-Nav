import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavigation = () => {
    return(
        <nav className='sub-nav'>
            <div className='sub-nav-links'>
            <NavLink exact to = '/macbook/'>MacBook</NavLink>
            <NavLink exact to = '/macbook-air/'>MacBook Air</NavLink>
            <NavLink exact to = '/macbook-pro/'>MacBook Pro</NavLink>
            <NavLink exact to = '/imac/'>iMac</NavLink>
            <NavLink exact to = '/imac-pro/'>iMac Pro</NavLink>
            <NavLink exact to = '/mac-pro/'>Mac Pro</NavLink>
            <NavLink exact to = '/mac-mini/'>Mac Mini</NavLink>
            <NavLink exact to = '/us/shop/goto/mac/accessories/'>Accessories</NavLink>
            <NavLink exact to = '/macos/mojave/'>Mojave</NavLink>
            <NavLink exact to = '/compare/'>Compare</NavLink>
            </div>
        </nav>
    );
}

export default SubNavigation;