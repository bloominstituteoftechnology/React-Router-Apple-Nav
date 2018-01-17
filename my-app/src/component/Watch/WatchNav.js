import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const WatchNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Apple Watch Series 3
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Apple Watch Nike+
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Apple Watch Hermes
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Apple Watch Edition
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Apple Watch Series 1
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        watchOS
                    </NavItem>
                    <NavItem eventKey={7} href="#">
                        Brands
                    </NavItem>
                    <NavItem eventKey={8} href="#">
                        Accessories
                    </NavItem>
                    <NavItem eventKey={9} href="#">
                        Compare
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default WatchNav;