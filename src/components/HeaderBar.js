import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
    return (
        <div className="header-bar row">
            <i className="fab fa-apple"></i>
            <Link className='nav-link' to="/mac">Mac</Link>
            <Link className='nav-link' to="/ipad">iPad</Link>
            <Link className='nav-link' to="/iphone">iPhone</Link>
            <Link className='nav-link' to="/">Watch</Link>
            <Link className='nav-link' to="/">TV</Link>
            <Link className='nav-link' to="/">Music</Link>
            <Link className='nav-link' to="/">Support</Link>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-bag fa-sm"></i>
        </div>
    );
}

export default HeaderBar;