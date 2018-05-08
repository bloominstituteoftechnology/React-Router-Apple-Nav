import React, { Component } from 'react';
import NavList from './NavList'
import SubNavList from './SubNavList'

class NavWrapper extends Component {
    render() {
        return (
            <div>
                <NavList />
                <SubNavList />
            </div>
        )
    }
   
}


export default NavWrapper;