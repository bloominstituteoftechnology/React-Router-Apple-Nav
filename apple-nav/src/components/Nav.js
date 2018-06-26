import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

class NavWrapper extends Component {
  state = {
    link: null
  }

  componentWillMount() {
    this.setState({ link: this.props.link });
  }

  render() {
    return (
      <div>
        {'stuff'}
      </div>
    );
  }
}

export default NavWrapper;
