import React from 'react';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    NavbarBrand,
    Nav,
NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CustomLink, CustomModal } from '../../components';



export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      sections: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Link to="/" >
            <NavbarBrand>Mac-icon</NavbarBrand>
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {/* (section, i) => (<Link to={`/${section}/`}> {section} </Link>) */}
                {this.state.sections.map(
                    (section, i) => (<CustomLink key={i} text={section} />)
                )}

                <CustomModal buttonLabel="searchIcon" />
                <CustomLink text="bagIcon" />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
