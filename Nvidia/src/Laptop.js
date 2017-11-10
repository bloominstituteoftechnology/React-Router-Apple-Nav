import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
export const Laptop = () => {
    return (
        <div className='splashPage'>
          <NavLink className='home' to="/">Home  </NavLink>
          <p>Laptop GPUs</p>
        </div>
    )
}

