import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const MusicNav = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Apple Music
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        iTunes
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        HomePod
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        iPod Touch
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Music Accessories
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        Gift Cards
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MusicNav;