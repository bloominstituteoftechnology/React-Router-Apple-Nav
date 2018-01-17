import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const iPhoneNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        iPhone X
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        iPhone 8
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        iPhone 7
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        iPhone 6s
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        iPhone SE
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        iOS 11
                    </NavItem>
                    <NavItem eventKey={7} href="#">
                        Accessories
                    </NavItem>
                    <NavItem eventKey={8} href="#">
                        Compare
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default iPhoneNav;