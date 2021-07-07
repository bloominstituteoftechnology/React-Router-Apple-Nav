import React, { Component } from 'react';
import '../../App.css';


class SubNav extends Component {
  render() {
    return (
      <div className="sub-nav">
      
       <div className="button" id="mac-book"></div>
      <div className="button">Mac</div>
      <div className="button">iPad</div>
      <div className="button iphone">iPhone</div>
      <div className="button">Watch</div>
      <div className="button">Tv</div>
      <div className="button">Music</div>
      <div className="button">Support</div>
      <div className="button" id="magnify"></div> 
      <div className="button" id="clipboard"></div>
     
      </div>
    );
  }
}

export default SubNav;