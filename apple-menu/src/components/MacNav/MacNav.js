import React, { Component } from 'react';
import data from '../../data';
import './MacNav.css'
class MacNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.mac.products,
    }
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    )
  }
}
export default MacNav;
