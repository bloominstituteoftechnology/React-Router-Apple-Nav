import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavLink = props => {
    return(
            <NavLink exact to = {`/${props.item.link}/`}>
                <div className='sub-nav-link'>
                    <img src={props.item.icon} alt={props.item.name} />
                    <p>{props.item.name}</p>
                </div>
            </NavLink>
    );
}

export default SubNavLink;