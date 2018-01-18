import React, {Component} from 'react';
import logo from '../../assets/apple.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (<div>
      <Navbar color="faded" light="light" expand="md">
        <NavbarBrand href="/"><img src={logo} alt='logo'/></NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          <Nav className="ml-auto" navbar="navbar">
            <NavItem>
              <NavLink href='/mac'>Mac</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ipad">iPad</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/tv'>TV</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/watch'>Watch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/music'>Music</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>);
  }
}
