import React from 'react';
import Nav from './Nav.js';
import SubNav from './SubNav.js';
import { Route } from 'react-router-dom';

const NavWrapper = props => {
    const navArr = props.NavArr;
    const subNavArr = props.subNavArr;
    return (
        <div>
            <Route path='/:category' render={props => (<Nav {...props} navArr={navArr} />)} />
            <SubNav subNavArr={subNavArr} />
        </div>
    )
};

export default NavWrapper;