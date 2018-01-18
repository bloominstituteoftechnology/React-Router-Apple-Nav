import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const WatchNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <NavLink to="/watch-series-3">Apple Watch Series 3</NavLink>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <NavLink to="/watch-nike+">Apple Watch Nike+</NavLink>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <NavLink to="/watch-hermes">Apple Watch Hermes</NavLink>
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        <NavLink to="/watch-edition">Apple Watch Edition</NavLink>
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        <NavLink to="/watch-series-1">Apple Watch Series 1</NavLink>
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        <NavLink to="/watch-os">watchOS</NavLink>
                    </NavItem>
                    <NavItem eventKey={7} href="#">
                        <NavLink to="/watch-brands">Brands</NavLink>
                    </NavItem>
                    <NavItem eventKey={8} href="#">
                        <NavLink to="/watch-accessories">Accessories</NavLink>
                    </NavItem>
                    <NavItem eventKey={9} href="#">
                        <NavLink to="/watch-compare">Compare</NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default WatchNav;