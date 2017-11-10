import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <NavItem>
          <Link to="/" className="Nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/mac/" className="Nav-link">Mac</Link>
        </NavItem>
        <NavItem>
          <Link to="/ipad/" className="Nav-link">iPad</Link>
        </NavItem>
        <NavItem>
          <Link to="/iphone/" className="Nav-link">iPhone</Link>
        </NavItem>
        <NavItem>
          <Link to="/watch/" className="Nav-link">Watch</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;