import React, { Component } from 'react';
import Nav from './Nav';


export default class SubNavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="SubNav-container">
              {console.log("Path inside SubNavContainer ", this.props.match.path)}
            <Nav path={`${this.props.match.path}macbook`} name="MacBook" src="https://www.apple.com/v/iphone/home/w/images/chapternav/iphone8_large.svg" />
            <Nav path={`${this.props.match.path}macbook-air`} name="MacBook Air" src="https://www.apple.com/v/iphone/home/w/images/chapternav/iphonese_large.svg"/>
            <Nav path={`${this.props.match.path}macbook-pro`} name="MacBook Pro" src="https://www.apple.com/v/watch/home/i/images/watch_nav_nike_large.svg"/>
        </div>
    );
  }
}
