import React, { Component } from 'react';

import Nav from './Nav';
import SubNav from './SubNav';

export default class NavWrapper extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Nav />
                <SubNav />
            </div>
        );
    }
}