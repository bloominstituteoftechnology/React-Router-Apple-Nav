import React from 'react';
import { Link } from 'react-router-dom';

let TopNav = () => {
    return(
        <header>
            <nav>
                <Link to="/"><i id="apple" className="fab fa-apple"></i></Link>
                <Link to="/mac">Mac</Link>
                <Link to="/ipad">iPad</Link>
                <Link to="/iphone">iPhone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/">Support</Link>
                <i className="fas fa-search"></i>
                <i className="fas fa-shopping-bag"></i>
            </nav>
        </header>
    )
}

export default TopNav;