import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div>
            <nav>
                <Link to='/mac'>Mac</Link>
                <Link to='/ipad'>iPad</Link>
                <Link to='/iphone'>iPhone</Link>
                <Link to='/watch'>Watch</Link>
                <Link to='/tv'>TV</Link>
                <Link to='/music'>Music</Link>
            </nav>
        </div>
    );
};

export default Nav;