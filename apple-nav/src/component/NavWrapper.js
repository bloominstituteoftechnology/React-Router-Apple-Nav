import React, { Component } from 'react';
import Nav from './Nav';

class NavWrapper extends Component {
  render() {
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
