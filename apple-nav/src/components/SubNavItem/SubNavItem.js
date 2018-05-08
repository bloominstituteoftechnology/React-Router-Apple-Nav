import React from 'react';
import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom';

const SubNavItem = ({toRender}) => {
    return (
        <NavItem>
            {toRender.icon}
            {toRender.name}
            {toRender.new ? <span>New</span> : null}
        </NavItem>
    );
};

export default SubNavItem;