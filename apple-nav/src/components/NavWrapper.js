import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import navLinks from '../data';
import NavLink from './NavLink';

class NavWrapper extends Component {
  state = {
    links: []
  }

  componentWillMount() {
    this.setState({ links: navLinks });
  }

  render() {
    return (
      <div>
        {this.state.links.map(link => (
          <Link to={`${link.name}`} key={link.id}>
            <NavLink key={Math.random()} link={link} />
          </Link>
        ))}
      </div>
    );
  }
}

export default NavWrapper;
