import React from 'react';
import { NavLink } from 'react-router-dom';
import SubNavLink from './SubNavLink';

const SubNavigation = props => {
    console.log(props);
    return(
        <nav className='sub-nav'>
            <div className='sub-nav-links'>
                {props.data.map(item => {
                    return <SubNavLink item={item} />
                })}
            </div>
        </nav>
    );
}

export default SubNavigation;