// React
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Nav.css';

const Nav = (props) => {
    const mainCat = props.navItem.mainCat;

    return (
        <span className = 'nav'>
            <Link to = { `/${ mainCat }` }>
                { props.navItem.mainCat }
            </Link>
        </span>
    );
}

export default Nav;
