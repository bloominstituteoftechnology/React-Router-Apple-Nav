import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
export const Mobile = () => {
    return (
        <div className='splashPage'>
        <NavLink className='home' to="/">Home  </NavLink>
        <p>Mobile GPUs</p>
        </div>
    )
}

