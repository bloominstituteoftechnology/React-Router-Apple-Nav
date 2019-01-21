import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <Link className={props.className} to={`/${props.page}`}>
        { props.text ? props.text : <img src={props.image} />}
        </Link>
    )
}

export default Nav;