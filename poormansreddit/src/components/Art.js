import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class Art extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am Art! </h1>
            </div>
        );
    }
}
export default Art;