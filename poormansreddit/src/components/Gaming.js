import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class Gaming extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am Gaming! </h1>
            </div>
        );
    }
}
export default Gaming;