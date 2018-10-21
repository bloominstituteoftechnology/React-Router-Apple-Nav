import React, { Component } from 'react';


class NavItem extends Component {
  render() { 
    
    return (  
      <>
       <h3>{this.props.item}</h3>
      </>
    );
  }
}
 
export default NavItem;