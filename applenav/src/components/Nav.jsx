import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <Link to={`/${props.page}`}>
        {props.text}
        </Link>
    )
}

export default Nav;