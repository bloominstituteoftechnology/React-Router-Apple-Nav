import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function MyComps() {
    return (

        <React.Fragment>
            <NavLink to='/myComps/myBookWind'>myBook Wind</NavLink>
            <NavLink to='/myComps/myBookSuper'>myBook Super</NavLink>
            <NavLink to='/myComps/myMac'>myMac</NavLink>
            <NavLink to='/myComps/myBook'>myBook</NavLink>
        </React.Fragment>
    )
}

export default MyComps;