import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const iPhoneNav = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <NavLink to="/iphone-x">iPhone X</NavLink>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <NavLink to="/iphone-8">iPhone 8</NavLink>
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            <NavLink to="/iphone-7">iPhone 7</NavLink>
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            <NavLink to="/iphone-6s">iPhone 6s</NavLink>
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            <NavLink to="/iphone-se">iPhone SE</NavLink>
                        </NavItem>
                        <NavItem eventKey={6} href="#">
                            <NavLink to="/iphone-ios">iOS 11</NavLink>
                        </NavItem>
                        <NavItem eventKey={7} href="#">
                            <NavLink to="/iphone-accessories">Accessories</NavLink>
                        </NavItem>
                        <NavItem eventKey={8} href="#">
                            <NavLink to="/iphone-accessories">Compare</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>iPhone Page!</h1>
        </div>
    );
}

export default iPhoneNav;