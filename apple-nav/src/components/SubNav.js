import React from "react";
import { NavLink } from "react-router-dom"

export default function SubNav(props) {
    const id = props.match.params.navId;
    const submenu = props.dataarray.find(item => `${item.id}` === id)
    return (
        <div className='SubNavWrapper'>
        {submenu.subnav.map(item =>
            <NavLink to={'/'}>
            {item.name}
            </NavLink>
            )}
            </div>
    )
}