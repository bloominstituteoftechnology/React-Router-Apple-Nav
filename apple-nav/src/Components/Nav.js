import React, { Component } from "react";

class Nav extends Component {
    constructor() {
        super();
        this.state= {
            navItems: [ 'Home', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support', 'Search', 'Shop']
        }
    };


  render() {
    return (
    <div className="nav-bar">
    {this.state.navItems.map(item => (
          <div>{item}</div>
        ))}
    </div>
    );
  }
}
export default Nav;
