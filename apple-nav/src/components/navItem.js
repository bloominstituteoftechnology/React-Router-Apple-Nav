import React  from 'react';

class NavItem extends React.Component {
  capitalize = string =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  render() { 
    return (
      <>
      <h3>{this.props.item}</h3>
      </>
    );
  }
}

export default NavItem;