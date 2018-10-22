import React from 'react';
import {NavLink} from 'react-router-dom';
import SubNav from './SubNav';



const Nav = props => {
    return(
        <>
        <NavLink to={`/${props.item.name}`}>{props.item.name}</NavLink>
        {/* <SubNav data={props.item} /> */}
        </>
    )
}

export default Nav;