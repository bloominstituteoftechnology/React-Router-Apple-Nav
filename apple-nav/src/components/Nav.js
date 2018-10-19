import React from 'react';
import { Link, Route } from 'react-router-dom';

import SubNav from './SubNav';

const NavItem = (props)=>{
    return (
        <div>
            <Link to={props.id}>{props.name}</Link>
        </div>
    )
}

const Nav = (props) =>{
    return (
        <div>
            {props.navData.map((data)=>{
                return <NavItem key={data.id} id={data.id} name={data.name}/>
            })}
            {props.navData.map((data)=>{
                return(
                    <Route key={data.id} path={`/${data.id}`} render={(props)=><SubNav {...props} data={data}/>}/>
                )
            })}
        </div>
    )
}

export default Nav;