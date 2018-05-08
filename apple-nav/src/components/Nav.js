import React from 'react';
import { Link } from 'react-router-dom';


const Nav = props => {
    const navStyles = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <Link style={navStyles} to="">{props.item}</Link>
    )
}

export default Nav;