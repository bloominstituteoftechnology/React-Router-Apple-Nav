import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const iconURLs = {
        logo: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg',
        search: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg',
        shop: 'https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg',
    }
    return (
        <div className="header">
            <div className="container">
                <img src={iconURLs.logo} alt="logo"/>
                <NavLink className="nav-link" to="/mac">Mac</NavLink>
                <NavLink className="nav-link" to="/ipad">iPad</NavLink>
                <NavLink className="nav-link" to="/iphone">iPhone</NavLink>
                <NavLink className="nav-link" to="/watch">Watch</NavLink>
                <NavLink className="nav-link" to="/tv">TV</NavLink>
                <NavLink className="nav-link" to="/music">Music</NavLink>
                <NavLink className="nav-link" to="/support">Support</NavLink>
                <img src={iconURLs.search} alt="search"/>
                <img src={iconURLs.shop} alt="shop"/>
            </div>
        </div>
    );
}

export default Header;
