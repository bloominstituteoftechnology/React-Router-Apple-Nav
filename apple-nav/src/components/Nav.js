import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav-link">
            <img src={props.link.img} width={props.link.width} />
            <Link to={props.link.url}>{props.link.name}</Link>
        </div>
    )
}

export default Nav;