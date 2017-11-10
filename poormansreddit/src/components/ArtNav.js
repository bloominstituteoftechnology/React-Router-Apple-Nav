import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
const ArtNav = () => {
    return (
      <div>
         <Nav className="nav">
            <NavItem>
                <NavLink activeClassName = "nav-link--active" to="/artnew">new</NavLink>
            </NavItem>     
            <NavItem className = "nav-link">
                <NavLink activeClassName = "nav-link--active" to ="/arttop" exact> top </NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName = "nav-link--active" to="/arthot">hot</NavLink>
            </NavItem>
        </Nav>
      </div>
    );
}
export default ArtNav;