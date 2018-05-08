import React, { Component } from 'react';

class SubNav extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.category}
      </div>
    );
  }
}

export default SubNav;
