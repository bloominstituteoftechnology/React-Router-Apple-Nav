import React, { Component } from 'react';

import { Data } from './SubNav-Data';
import FourOhFour from './NavWrapper';
import './SubNav.css';

export default class SubNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(Data);
        console.log(Data[this.props.match.params.device]);
        return(
            <nav className='SubNav'>
                <ul className='SubNav__ul'>
                    {Data[this.props.match.params.device].links.map((link, index) => (
                        <li>{link}</li>
                    ))}
                </ul>
            </nav>
        );
    }
}