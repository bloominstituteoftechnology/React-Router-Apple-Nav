import React from 'react';
import Nav from './Nav'


const NavWrapper = props => {
    return (
        <div className="nav-container">
            <i className="fab fa-apple"></i>
                {props.data.map(item =>(
                    <Nav item={item} key={item.id} />
                ))}
            <a href="#">Support</a>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-bag"></i>
        </div>
    )
}

export default NavWrapper;