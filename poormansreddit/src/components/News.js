import React, { Component } from 'react';
import Navigation from './Navigation';
import ArtNav from './ArtNav';
class News extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ArtNav/>
                <h1> I am News! </h1>
            </div>
        );
    }
}
export default News;