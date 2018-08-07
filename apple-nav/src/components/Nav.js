import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav-link">
            <Link to={props.link.url}><img src={props.link.img} width={props.link.width} alt=""/></Link>
            <Link to={props.link.url}>{props.link.name}</Link>
        </div>
    )
}

export default Nav;