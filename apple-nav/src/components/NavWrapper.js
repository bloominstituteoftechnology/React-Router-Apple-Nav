// React
import React from 'react';
import { Route, Link } from 'react-router-dom';

// Components
import Nav from './Nav';
import SubNav from './SubNav';

// Stylings
import './NavWrapper.css';

const NavWrapper = (props) => {
    return (
        <div className = 'nav-wrapper'>
            <span>
                <Link to = '/'>Apple logo</Link>
            </span>
            { props.navData.map((navItem, i) => <Nav key = {i} navItem = { navItem } />)}

            <Route path = '/:mainCat' render = { props => <SubNav {...props} /> } />
        </div>
    );
}

export default NavWrapper;
