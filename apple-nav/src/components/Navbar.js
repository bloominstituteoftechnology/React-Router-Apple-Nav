import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Home, Macs } from './index';

class Navbar extends Component {
    constructor() {
        super();
        this.state={
            macs: ['Macbook', 'Macbook Air', 'Macbook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac Mini', 'Accessories', 'High Sierra', 'Compare'],
            ipads: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories', 'Compare'],
            iphones: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Acessories', 'Compare'],
            watchs: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Edition', 'Apple Watch Series 1', 'WatchOS', 'Bands', 'Accessories', 'Compare'],
            tvs: ['Apple TV 4K', 'Apple TV', 'TV App', 'Accessories', 'Compare'],
            musics: ['Apple Music', 'iTunes', 'HomePod', 'iPod touch', 'Music Accessories', 'Gift Cards']
          }
    }
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/macs">Macs</Link>
                <Link to="/ipads">iPads</Link>
                <Link to="/iphones">iPhones</Link>
                <Link to="/watchs">Watch</Link>
                <Link to="/tvs">TV</Link>
                <Link to="/musics">Music</Link>
                <Route exact path="/" component={Home} />
                <Route path="/macs" render={(props) => <Macs {...props} macs={this.state.macs} />} />
                <Route path="/ipads" render={(props) => <Macs {...props} macs={this.state.ipads} />} />
                <Route path="/iphones" render={(props) => <Macs {...props} macs={this.state.iphones} />} />
                <Route path="/watchs" render={(props) => <Macs {...props} macs={this.state.watchs} />} />
                <Route path="/tvs" render={(props) => <Macs {...props} macs={this.state.tvs} />} />
                <Route path="/musics" render={(props) => <Macs {...props} macs={this.state.musics} />} />
            </div>
        )
    }
}
export default Navbar;