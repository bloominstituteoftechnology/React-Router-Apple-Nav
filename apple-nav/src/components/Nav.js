import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import './Nav.css';

const Nav = props => {
    return (
        <div>
            <header>something</header>
            {props.products}
        </div>
    );
};

export default Nav;
