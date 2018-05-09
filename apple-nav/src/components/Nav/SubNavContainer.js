import React, { Component } from 'react';
import Nav from './Nav';


export default class SubNavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="SubNav-container">
            <Nav href="/macbook/" linkText="MacBook" src="https://www.apple.com/v/iphone/home/w/images/chapternav/iphone8_large.svg" />
            <Nav href="/macbook-air/" linkText="MacBook Air" src="https://www.apple.com/v/iphone/home/w/images/chapternav/iphonese_large.svg"/>
            <Nav href="/macbook-pro/" linkText="MacBook Pro" src="https://www.apple.com/v/watch/home/i/images/watch_nav_nike_large.svg"/>
        </div>
    );
  }
}
