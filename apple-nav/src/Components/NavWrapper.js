import React, { Component } from "react";
import Nav from "./Nav";

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },  
}

class NavWrapper extends Component {
  render() {
    console.log("imProps", this.props)
    return (
      <div style={styles.main}>
        {this.props.categories.map(category => (
          <Nav key={category} category={category} />
        ))}
      </div>
    );
  }
}

export default NavWrapper;
