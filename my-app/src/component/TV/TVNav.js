import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TVNav = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <NavLink to="/apple-tv-4k">Apple TV 4K</NavLink>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <NavLink to="/apple-tv">Apple TV</NavLink>
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            <NavLink to="/tv-app">TV App</NavLink>
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            <NavLink to="/tv-accessories">Accessories</NavLink>
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            <NavLink to="/tv-compare">Compare</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>TV Page!</h1>
        </div>
    );
}

export default TVNav;