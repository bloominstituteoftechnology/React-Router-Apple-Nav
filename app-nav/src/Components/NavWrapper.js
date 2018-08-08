import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDom from "react-dom";


const NavWrapper = props => {
    return (
        <div className="navWrapped" >
            {props.navItems.map(nav => (
                <NavLink to={`/${nav}`} activeClassName="activeNavLink" >
                    {nav}
                </NavLink>
            )
        ) }
        </div>
    );
};

export default NavWrapper;