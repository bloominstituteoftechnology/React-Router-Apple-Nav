import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div onClick={this.props.handleClick}>
        {this.props.nav}
      </div>
    );
  }
}

export default Nav;
