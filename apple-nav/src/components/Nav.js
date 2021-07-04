import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div>
            {props.navArr.map((category) => {
                return (
                    <Link to={`/${category}`}>
                        {category}
                    </Link>
                )
            })}
        </div>
    )
};

export default Nav;