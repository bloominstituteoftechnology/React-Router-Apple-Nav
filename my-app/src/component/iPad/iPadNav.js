import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const iPadNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <NavLink to="/ipad-pro">iPad Pro</NavLink>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <NavLink to="/ipad-9.7">iPad</NavLink>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <NavLink to="/ipad-mini-4">iPad mini 4</NavLink>
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        <NavLink to="/ios-11">iOS 11</NavLink>
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        <NavLink to="ipad-accessories"k>Accessories</NavLink>
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        <NavLink to="/ipad-compare">Compare</NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default iPadNav;