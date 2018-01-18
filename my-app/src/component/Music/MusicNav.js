import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MusicNav = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <NavLink to="/apple-music">Apple Music</NavLink>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <NavLink to="/itunes">iTunes</NavLink>
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            <NavLink to="/homepod">HomePod</NavLink>
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            <NavLink to="/ipod-touch">iPod Touch</NavLink>
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            <NavLink to="/music-accessories">Music Accessories</NavLink>
                        </NavItem>
                        <NavItem eventKey={6} href="#">
                            <NavLink to="/gift-cards">Gift Cards</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>Music Page!</h1>
        </div>
    );
}

export default MusicNav;