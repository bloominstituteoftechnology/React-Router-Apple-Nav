import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <NavLink to={`/${props.name.toLowerCase()}`} activeClassName="selected"> {props.name} </NavLink>
    )
}

export default Nav;