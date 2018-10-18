import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = (props) => {
    return (
        <Link to={`/${props.name.toLowerCase()}`} > {props.name} </Link>
    )
}
 export default MainNav;