import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavigation = () => {
    return(
        <nav className='sub-nav'>
            <div className='sub-nav-links'>
            <NavLink exact to = '/macbook/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-laptop"></i>
                    <p>MacBook</p>
                </div>
            </NavLink>
            <NavLink exact to = '/macbook-air/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-laptop"></i>
                    <p>MacBook Air</p>
                </div>
            </NavLink>
            <NavLink exact to = '/macbook-pro/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-laptop"></i>
                    <p>MacBook Pro</p>
                </div>
            </NavLink>
            <NavLink exact to = '/imac/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-desktop"></i>
                    <p>iMac</p>
                </div>
            </NavLink>
            <NavLink exact to = '/imac-pro/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-desktop"></i>
                    <p>iMac Pro</p>
                </div>
            </NavLink>
            <NavLink exact to = '/mac-pro/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-square mac-pro"></i>
                    <p>Mac Pro</p>
                </div>
            </NavLink>
            <NavLink exact to = '/mac-mini/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-square mac-mini"></i>
                    <p>Mac Mini</p>
                </div>
            </NavLink>
            <NavLink exact to = '/us/shop/goto/mac/accessories/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-headphones-alt"></i>
                    <p>Accessories</p>
                </div>
            </NavLink>
            <NavLink exact to = '/macos/mojave/'>
                <div className='sub-nav-link'>
                    <div className='macos-circle'>
                        <p className='circle-mac'>mac</p>
                        <p className='circle-os'>OS</p>
                    </div>
                    <p>Mojave</p>
                </div>
            </NavLink>
            <NavLink exact to = '/compare/'>
                <div className='sub-nav-link'>
                    <i class="fas fa-desktop compare-desktop"></i>
                    <i class="fas fa-laptop compare-laptop"></i>
                    <p className='compare'>Compare</p>
                </div>
            </NavLink>
            </div>
        </nav>
    );
}

export default SubNavigation;