import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function MyPads() {
    return (

        <React.Fragment>
            <NavLink to='/myPads/myPadSuper'>myPad Super</NavLink>
            <NavLink to='/myPads/myPad'>myPad</NavLink>
            <NavLink to='/myPads/myPadTiny'>myPad tiny</NavLink>
            <NavLink to='/myPads/accessories'>Accessories</NavLink>
        </React.Fragment>
    )
}

export default MyPads;