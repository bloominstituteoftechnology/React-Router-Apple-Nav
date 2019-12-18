import React from 'react';
import { Link } from 'react-router-dom';

const NavWrapper = () => {
    return (
        <div>
             <Link to='/'>
            {/* Apple img here */}
            </Link>
            <Link to='/nav/mac'>
            Mac
            </Link>
            <Link to='/nav/ipad'>
            Ipad
            </Link>
            <Link to='/nav/iphone'>
            Iphone
            </Link>
            <Link to='/nav/watch'>
            Watch
            </Link>
            <Link to='/nav/tv'>
            Tv
            </Link>
            <Link to='/nav/music'>
            Music
            </Link>
            <Link to='/nav/support'>
            Support
            </Link>
            <Link to='/nav/search'>
            {/* Search icon */}
            </Link>
            <Link to='/nav/shop'>
            {/* Shop icon */}
            </Link>
        </div>
    );
}

export default NavWrapper;