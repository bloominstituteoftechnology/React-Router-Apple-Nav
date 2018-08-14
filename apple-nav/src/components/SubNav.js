import React from 'react';
import { NavLink } from 'react-router-dom';

const subItems = {
    mac: [],
    ipad: [],
    iphone: [],
    watch: [],
    tv: [],
    music: [],
    support: []
}

const SubNav = (props) => {
    const navItems = subItems[props.match.params.name];
    return (
        <div className="sub-nav">
            {navItems.map((element, index) => <p key={index} >{element}</p>)}
        </div>
    );
}
export default SubNav;