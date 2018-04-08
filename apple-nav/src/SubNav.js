import React, { Component } from 'react';

class SubNav extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
	{this.props.match.params.product}
	SubNav goes here
      </div>
    );
  }
}

export default SubNav;
