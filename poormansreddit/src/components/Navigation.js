import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';
const Navigation = () => {
    return (
      <div>
         <Nav className="nav">
        <NavItem className = "nav-link">
          <NavLink activeClassName = "nav-link--active" to ="/" exact> Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink activeClassName = "nav-link--active" to="/news">News</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName = "nav-link--active" to="/art">Art</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName = "nav-link--active" to="/funny">Funny</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName = "nav-link--active" to="/gaming">Gaming</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName = "nav-link--active" to="/askme">AskMe</NavLink>
        </NavItem>    
      </Nav>
      </div>
    );
}
export default Navigation;