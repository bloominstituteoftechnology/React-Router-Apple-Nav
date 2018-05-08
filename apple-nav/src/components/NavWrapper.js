import React, { Component } from 'react';
import Nav from './Nav';
import { Route } from 'react-router-dom';

const NavWrapper = (props) => {

    return (
        <div className="navbar">
            {props.navItems.map(navItem => {
                return (
                    // <Route 
                    //     path={`/${navItem.category}`} 
                    //     key={navItem.category}
                    //     render={props => <Nav {...props} nav={navItem}/>}>
                    // </Route>
                    <Nav nav={navItem}/>
                )
            })}    
        </div>
    )

}
 
export default NavWrapper;