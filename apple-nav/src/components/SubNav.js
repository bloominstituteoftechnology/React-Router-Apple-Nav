import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

class SubNav extends Component {
  state = {
    link: null
  }

  componentWillMount() {
    this.setState({ link: this.props.link });
  }

  render() {
    return (
      <div>
        {this.state.link.subNav.map(link => <NavLink key={Math.random()} link={link} />)}
      </div>
    );
  }
}

export default SubNav;
