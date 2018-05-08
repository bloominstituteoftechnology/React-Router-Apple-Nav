import React, { Component } from 'react';
import Nav from './Nav';

class NavWrapper extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.categories.map(category => 
          <Nav key={category} category={category}/> 
        )}
      </div>
    );
  }
}

export default NavWrapper;
