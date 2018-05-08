import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const style = {
    // 'padding': '0 2rem',
    // 'textDecoration': 'none'
}

const CustomLink = (props) => {
    return (
        <NavItem>
            <NavLink className="custom-nav-link" style={style} to={`/${props.text}/`}>
                {props.text}
            </NavLink>
        </NavItem>
    );
};

export default CustomLink