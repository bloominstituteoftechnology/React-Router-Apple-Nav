import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class Pics extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am Pics! </h1>
            </div>
        );
    }
}
export default Pics;