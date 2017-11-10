import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class AskMe extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am AskMe! </h1>
            </div>
        );
    }
}
export default AskMe;