import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class ArtHot extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am Hot! </h1>
            </div>
        );
    }
}
export default ArtHot;