import React, { Component } from 'react';
import Nav from './Nav';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },  
}

class NavWrapper extends Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.categories.map(category => 
          <Nav key={category} category={category}/> 
        )}
      </div>
    );
  }
}

export default NavWrapper;
