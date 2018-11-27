import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return(
        <nav className='navigation'>
            <div className='nav-links'>
            <NavLink to ='/'><i class="fab fa-apple"></i></NavLink>
            <NavLink to ='/mac/'>Mac</NavLink>
            <NavLink to ='/ipad/'>iPad</NavLink>
            <NavLink to ='/iphone/'>iPhone</NavLink>
            <NavLink to ='/watch/'>Watch</NavLink>
            <NavLink to ='/tv/'>TV</NavLink>
            <NavLink to ='/music/'>Music</NavLink>
            <NavLink to ='/support/'>Support</NavLink>
            <NavLink to ='/'><i class="fas fa-search"></i></NavLink>
            <NavLink to ='/'><i class="fas fa-shopping-bag"></i></NavLink>
            </div>
      </nav>
    );
}

export default MainNavigation;