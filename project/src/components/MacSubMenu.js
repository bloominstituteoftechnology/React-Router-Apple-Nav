import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const MacSubMenu = () => {
  return (
    <div>
      <Nav className="App">
        <NavItem>
          <Link to="/mac/test/" className="Nav-link">Mac</Link>
        </NavItem>
        <NavItem>
          <Link to="/mac/test2/" className="Nav-link">Mac2</Link>
        </NavItem>
        <NavItem>
          <Link to="/mac/test3/" className="Nav-link">Mac3</Link>
        </NavItem>
        <NavItem>
          <Link to="/mac/test4/" className="Nav-link">Mac4</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default MacSubMenu;