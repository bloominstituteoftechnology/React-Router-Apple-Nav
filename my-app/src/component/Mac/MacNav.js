import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MacNav = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <NavLink to="/macbook">MacBook</NavLink>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <NavLink to="/macbook-air">MacBook Air</NavLink>
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            <NavLink to="/macbook-pro">MacBook Pro</NavLink>
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            <NavLink to="/imac">iMac</NavLink>
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            <NavLink to="/imac-pro">iMac Pro</NavLink>
                        </NavItem>
                        <NavItem eventKey={6} href="#">
                            <NavLink to="/mac-pro">Mac Pro</NavLink>
                        </NavItem>
                        <NavItem eventKey={7} href="#">
                            <NavLink to="/mac-mini">Mac Mini</NavLink>
                        </NavItem>
                        <NavItem eventKey={8} href="#">
                            <NavLink to="/mac-accessories">Accessories</NavLink>
                        </NavItem>
                        <NavItem eventKey={9} href="#">
                            <NavLink to="/high-sierra">High Sierra</NavLink>
                        </NavItem>
                        <NavItem eventKey={10} href="#">
                            <NavLink to="/mac-compare">Compare</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>Mac Page!</h1>
        </div>
    );
}

export default MacNav;