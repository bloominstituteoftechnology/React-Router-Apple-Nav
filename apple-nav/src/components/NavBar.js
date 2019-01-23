import React from "react";
import { NavLink } from "react-router-dom"

export default function NavBar(props) {
    return (
        <div className='NavWrapper'>
        {props.dataarray.map(item =>
            <NavLink to={`/${item.id}`}>
            {item.name}
            </NavLink>
            )}
            </div>
    )
}

