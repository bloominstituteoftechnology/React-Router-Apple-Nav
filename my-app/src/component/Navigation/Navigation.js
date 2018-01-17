import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './Navigation.css'
import {  NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">Apple</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <NavLink to="/mac">Mac</NavLink>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <NavLink to="/ipad">iPad</NavLink>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <NavLink to="/iphone">iPhone</NavLink>
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        <NavLink to="/watch">Watch</NavLink>
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        <NavLink to="/tv">TV</NavLink>
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        <NavLink to="/music">Music</NavLink>
                    </NavItem>
                    <NavItem eventKey={7} href="#">
                        Support
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;