import React, {Component} from 'react';
import {Home, Macs, IPads, IPhones, Watch, TV, Music, Support, FourOFour} from './index';

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
                {console.log("NavBar Props", this.props)}
                <Link to="/" >Home</Link>
                <Link to="/macs">Macs</Link>
                <Link to="/ipads">iPads</Link>
                <Link to="/iphones">iPhones</Link>
                <Link to="/watches">Watch</Link>
                <Link to="/tvs">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/support">Support</Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/macs" render={(props) => <Macs {...props} macs={this.state.mac} />} />
                    <Route path="/ipads" render={(props) => <IPads {...props} ipads={this.state.iPad} />} />
                    <Route path="/iphones" render={(props) => <IPhones {...props} iphones={this.state.iPhone} />} />
                    <Route path="/watches" render={(props) => <Watch {...props} watches={this.state.watch} />} />
                    <Route path="/tvs" render={(props) => <TV {...props} tvs={this.state.TV} />} />
                    <Route path="/music" render={(props) => <Music {...props} musics={this.state.music} />} />
                    <Route path="/support" component={Support} />
                    <Route component={FourOFour} />
                </Switch>
            </div>
        )
    }
}

export default NavWrapper;