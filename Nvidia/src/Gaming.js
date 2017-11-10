import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.css';
const gamingGpusList = ['GTX 1080ti', 'GTX 1070ti', 'GTX 1060ti', 'GTX 1050ti' ]

export const GamingGpus = () => {
    <ul>
        {gamingGpusList.map((gpu) => {
            return(
            <NavLink className='subLink' activeClassName='activeLink' to={`/gaming/${gpu}`} key={gpu}>
            {gpu}
            </NavLink>
            )
        })}
    </ul>

}

export const Gaming = () => {
    return (
        <div className='splashPage'>
        <NavLink className='home' to="/">Home  </NavLink>
        <p> Gaming GPUs </p>
        
        </div>
    )
}
