import React from 'react';
import { Route } from 'react-router-dom';

import SubNavBar from './SubNavBar';
const NavSubRoutes = () => {
    return (
        <>
            <Route path="/Mac" component={props => <SubNavBar navImg={require("../images/mac-nav.PNG")} />} />
            <Route path="/Ipad" component={props => <SubNavBar navImg={require("../images/ipad-nav.PNG")} />} />
        </>
    )
}

export default NavSubRoutes