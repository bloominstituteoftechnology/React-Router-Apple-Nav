import React from 'react';

const Nav = props => {
    return (
        <li>
            <StyledLink to={`/${category}`} activeStyle={{ 'color': 'darkgray' }}>{category}</StyledLink>
        </li>
    )
}