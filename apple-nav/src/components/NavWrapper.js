import React from 'react';
import NavItems from './NavItem.js';
import { Route } from 'react-router-dom';
import MacNav from './MacNav.js';


const NavWrapper = () => {
    return (
        <div>
            <div>
                <Route path='/' component={NavItems} />
            </div>
            <div className='subNav'>
                <Route path='/Mac' component={MacNav} />
            </div>
        </div>
    )
}

export default NavWrapper;