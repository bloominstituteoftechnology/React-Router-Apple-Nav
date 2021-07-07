import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavList from './NavList'
import SubNavList from './SubNavList'

class NavWrapper extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={NavList}/>
                <Route path="/:name" component={SubNavList}/>
            </div>
        )
    }
   
}


export default NavWrapper;