import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class IPadSub extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Container">
      <div className="Header">
        <NavLink to={`/ipad/ipadpro`}> iPad Pro </NavLink>
      </div>
    </div>
    );
  }
}


export default IPadSub;