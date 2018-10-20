import React, { Component } from 'react';
import '../../App.css';
import SubNav from '../SubNav/SubNav';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
       <div className="button" id="apple"></div>
      <div className="nav-item mac">Mac</div>
      <div className="nav-item ipad">iPad</div>
      <div className="nav-item iphone">iPhone</div>
      <div className="nav-item watch">Watch</div>
      <div className="nav-item tv">Tv</div>
      <div className="nav-item music">Music</div>
      <div className="nav-item support">Support</div>
      <div className="button" id="magnify"></div> 
      <div className="button" id="clipboard"></div>
     <SubNav></SubNav>
      
      </div>
    );
  }
}

export default Nav;