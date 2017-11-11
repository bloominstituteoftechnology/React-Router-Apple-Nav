import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MacSub extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Container">
      <div className="Header">
        <NavLink to={`/mac/imacpro`}> iMac Pro </NavLink>
      </div>
    </div>
    );
  }
}


export default MacSub;