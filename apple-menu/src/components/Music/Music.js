import React, { Component } from 'react';
import './Music.css';
import data from '../../data';

class Music extends Component {
  constructor() {
    super();
    this.state = {
      items: data.music.products,
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

export default Music;
