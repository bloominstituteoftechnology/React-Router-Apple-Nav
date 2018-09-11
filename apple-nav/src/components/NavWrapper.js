// React
import React from 'react';
import { Route, Link } from 'react-router-dom';

// Components
import Nav from './Nav';
import SubNav from './SubNav';

// Styles
import './NavWrapper.css';

// Images
import appleLogo from '../images/apple-logo.png';

const NavWrapper = (props) => {
    // create a navData variable so you can pass it into the Route without confusing the two props
    const navData = props.navData;

    return (
        <div className = 'nav-wrapper' style = { props.location.pathname === '/' ? null : {backgroundColor: 'black'}}>
            <div className = 'main-nav'>
                <span>
                    <Link to = '/'><img id = 'apple-logo' alt = 'apple logo' src = { appleLogo } /></Link>
                </span>

                { navData.map((navItem, i) => <Nav key = { i } navItem = { navItem } />)}

                <span>Support</span>
            </div>

            <Route path = '/:mainCat' render = { props => <SubNav {...props} navData = { navData } /> } />
        </div>
    );
}

export default NavWrapper;
