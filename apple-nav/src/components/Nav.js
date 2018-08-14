import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <div className="nav-container">
        <Link to="/"> <i class="fab fa-apple"></i> </Link>
        <Link className="white-color" to="/mac"> Mac </Link>
        <Link className="white-color" to="/ipad"> iPad </Link>
        <Link className="white-color" to="/iphone"> iPhone </Link>
        <Link className="white-color" to="/watch"> Watch </Link>
        <Link className="white-color" to="/tv"> TV </Link>
        <Link className="white-color" to="/music"> Music </Link>
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-bag"></i>
        </div>

     );
}
 
export default Nav;