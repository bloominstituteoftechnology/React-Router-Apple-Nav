import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = props => {
    return(
        <nav className='navigation'>
            <div className='nav-links'>
            <NavLink to ='/'><i class="fab fa-apple"></i></NavLink>
            {props.data.map(dataset => {
                let linkText = dataset.dataName.charAt(0).toUpperCase();
                linkText += dataset.dataName.slice(1);

                return <NavLink to={`/${dataset.dataName}/`}>{linkText}</NavLink>
            })}
            <NavLink to ='/support/'>Support</NavLink>
            <NavLink to ='/'><i class="fas fa-search"></i></NavLink>
            <NavLink to ='/'><i class="fas fa-shopping-bag"></i></NavLink>
            </div>
      </nav>
    );
}

export default MainNavigation;