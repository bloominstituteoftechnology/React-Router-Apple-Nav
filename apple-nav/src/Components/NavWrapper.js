import React, { Component } from 'react';

import Nav from './Nav';
import SubNav from './SubNav';
import { Switch, Route } from 'react-router-dom';

export default class NavWrapper extends Component {
    constructor() {
    super();
}

render() {
    return(
        <div>
            <Nav />,
            <Switch>
                <Route exact path='/' />
                <Route exact path ='/mac' component={SubNav} />
                <Route exact path ='/ipad' component={SubNav} />
                <Route exact path ='/iphone' component={SubNav} />
                <Route exact path ='/watch' component={SubNav} />
                <Route exact path ='/tv' component={SubNav} />
                <Route exact path ='/music' component={SubNav} />
                <Route component ={FourOhFour} />
            </Switch>
        </div>
    );
}

}

const FourOhFour = () => <h3>Oh No! You matched nothing! 404</h3>;
