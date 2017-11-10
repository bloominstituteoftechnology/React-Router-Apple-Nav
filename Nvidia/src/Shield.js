import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
export const Shield = () => {
    return (
        <div className='splashPage'>
        <NavLink className='home' to="/">Home  </NavLink>
        <p> Shield Info </p>
        </div>
    )
}

