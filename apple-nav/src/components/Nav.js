import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props)=>{
    return (
        <div>
            <Link to={props.name}>{props.name}</Link>
        </div>
    )
}

const Nav = (props) =>{
    return (
        <div>
            {props.names.map((name)=>{
                return <NavItem key={name} name={name}/>
            })}
        </div>
    )
}

export default Nav;