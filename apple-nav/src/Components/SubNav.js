/////reusable and display sub navigation menu
import React from 'react';
import { Route } from 'react-router-dom';
import NavItem from './NavItem';
import { Mac, iPad, iPhone } from '../data';

const SubNav = (props) => {
    return (
        <div>
            <Route path='/mac' component={Mac} />
            <Route path='/iPad' component={iPad} />
            <Route path='/Iphone' component={iPhone} />


            

        </div>
    )
}

 
export default SubNav;






