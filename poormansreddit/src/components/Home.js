import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class Home extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am Home! </h1>
            </div>
        );
    }
}
export default Home;