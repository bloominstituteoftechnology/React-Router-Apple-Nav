import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import SubNav from './SubNav';
import './NavWrapper.css';

export default class NavWrapper extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/' />
                    <Route path='/mac' component={SubNav} />
                    <Route path='/ipad' component={SubNav} />
                    <Route path='/iphone' component={SubNav} />
                    <Route path='/watch' component={SubNav} />
                    <Route path='/tv' component={SubNav} />
                    <Route path='/music' component={SubNav} />
                    <Route component={FourOhFour} />
                </Switch>
            </div>
        );
    }
}

const FourOhFour = () => (
    <div className='FourOhFour'>
        <i class="far fa-frown"></i>
        <h3>404: Art thou lost????</h3>
    </div>
);