import React from 'react';
import Nav from './Nav';

const items = ["Mac", "Ipad", "Iphone", "Watch", "TV", "Music", "Support"]

const NavWrapper = (props) => {
    return (
        <div className="main-nav">
            {items.map((item, index) => <Nav key={index} name={item} />)}
        </div>
    );
}
export default NavWrapper;
