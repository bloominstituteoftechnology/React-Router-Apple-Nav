//I created this document since the README said I should

import React, { Component } from 'react';

class SubNav extends Component {
  constructor() {
    super();
  }
// This is apparently a useless constructor so I probably ought to delete lines 6-8
  
  render () {
    return (
      <div>
	{this.props.match.params.product} //I totally stole this from yesterday but it doesn't really do what I need it to do
	SubNav goes here 
      </div>
    );
  }
}

export default SubNav;
