import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class ArtTop extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am Top! </h1>
            </div>
        );
    }
}
export default ArtTop;