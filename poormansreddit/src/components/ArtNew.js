import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class ArtNew extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am New! </h1>
            </div>
        );
    }
}
export default ArtNew;