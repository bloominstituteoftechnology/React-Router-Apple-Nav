import React from 'react';
import {Link, Route} from 'react-router-dom';

import SubNav from './SubNav'
const Nav = (props) => {
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
         {/* <Route path="/:navProp" render={props => {
            <SubNav {...props} />
        } 
         }
          /> */}
        </div>

     );
}
 
export default Nav;