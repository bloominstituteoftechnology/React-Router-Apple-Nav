import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Link to={`/${this.props.category.toLowerCase()}`}>
        {this.props.category}
      </Link>
    );
  }
}

export default Nav;
