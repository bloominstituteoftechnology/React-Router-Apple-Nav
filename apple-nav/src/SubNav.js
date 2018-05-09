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

// I think in order to make this work I might need to create variables or arrays that contain all the info for each nav item and then link them together. I ran out of time on this. As it is right now, when you click on links in the Nav it drops down with the name of the product and "SubNav goes here" so I guess that's the framework for it.
