import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const iPadNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        iPad Pro
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        iPad
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        iPad mini 4
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        iOS 11
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Accessories
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        Compare
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default iPadNav;