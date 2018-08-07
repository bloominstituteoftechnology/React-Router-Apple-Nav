import React from 'react';
import Nav from './Nav';

const NavWrapper = (props) => {
    return (
        <div className="header-bg">
            <div className="header">
                {props.list.map(link => <Nav link={link} />)}
            </div>
        </div>
    )
}

export default NavWrapper;