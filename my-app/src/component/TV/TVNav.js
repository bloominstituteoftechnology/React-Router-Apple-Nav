import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const TVNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Apple TV 4K
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Apple TV
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        TV App
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Accessories
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Compare
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TVNav;