import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function MyPhones() {
    return (

        <React.Fragment>
            <NavLink to='/myPhones/myPhone10x'>myPhone 10x</NavLink>
            <NavLink to='/myPhones/myPhone10y'>myPhone 10y</NavLink>
            <NavLink to='/myPhones/myPhoneVIII'>myPhone VIII</NavLink>
            <NavLink to='/myPhones/myPhoneVII'>myPhone VII</NavLink>
        </React.Fragment>
    )
}

export default MyPhones;