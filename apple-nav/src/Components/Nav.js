import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

 const Nav = props => {
    return (
        <div>
            <NavLink to = {`/${props.name.toLowerCase()}`}>{props.name}</NavLink>
        </div>
    )
}

 export default Nav;