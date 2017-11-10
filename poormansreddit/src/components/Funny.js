import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class Funny extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am funny! </h1>
            </div>
        );
    }
}
export default Funny;