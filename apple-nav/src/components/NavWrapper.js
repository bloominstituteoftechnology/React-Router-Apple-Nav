import React from 'react'
import { Route } from 'react-router-dom';

import Nav from './Nav';
import SubNav from './SubNav';
import Content from './Content';
import nav from '../../data';

function NavWrapper() {
    return (
        <div className='container'>
            <header className='nav-wrapper'>
                <Route
                    path='/nav' 
                    render={props => (
                        <Nav {...props} nav = {nav} />)}
                />
                <Route 
                    path='/nav/:id'
                    render={props => (
                        <SubNav {...props} nav = {nav} />)}
                />
            </header>
            <div className='content'>
                <Route 
                    path='/nav/:id/{nav.subNav.id}'
                    render={props => (
                        <Content {...props} nav = {nav}/>)}
                />
            </div>
        </div>
    );
}

export default NavWrapper;