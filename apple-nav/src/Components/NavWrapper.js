import React from 'react';
import MainNav from './MainNav';

const NavElements = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];
 const NavContainer = (props) => {
    return (
        <div className="nav-container">
            <div className="main-nav">
                {NavElements.map(element => <MainNav key={element} name={element} />)}
            </div>
        </div>
    )
}
 export default NavContainer;