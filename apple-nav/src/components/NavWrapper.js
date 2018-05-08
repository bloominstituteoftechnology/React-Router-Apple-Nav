import React, {Component} from 'react';
import {Home, Nav} from './index';

import {Route, Link, Switch} from 'react-router-dom';

class NavWrapper extends Component {
    constructor() {
        super();
        this.state = {
          mac: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra', 'Compare'],
          iPad: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
          iPhone: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories', 'Compare'],
          watch: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Apple Watch Edition', 'Apple Watch Series 1', 'watchOS', 'Bands', 'Accessories', 'Compare'],
          TV: ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare'],
          music: ['Apple Music', 'iTunes', 'HomePod', 'iPod touch', 'Music Accessories', 'Gift Cards'],
        }
      }

    render() {
        return (
            <div>
                <Link to="/" >Home</Link>
                <Link to="/macs">Macs</Link>
                <Route exact path="/" component={Home} />
                <Route path="/macs" render={(props) => <Nav {...props} macs={this.state.mac} />} />
            </div>
        )
    }
}

export default NavWrapper;