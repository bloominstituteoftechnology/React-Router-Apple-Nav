import React from 'react';
// import {Link} from 'react-router-dom';
// import styled from 'styled-components'; 


import NavBox from './HomeNav.js';

const navTags = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];
const choices = {"Mac":["MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Accessories", "High Sierra", "Compare"],
 "iPad": ["iPad Pro", "iPad", "iPad mini 4", "iOS 11", "Accessories", "Compare"],
  "iPhone":["iPhone X", "iPhone 8", "iPhone 7", "iPhone 6s", "iPhone SE", "iOS 11", "Accessories", "Compare"],
   "Watch": ["Apple Watch Series 3", "Apple Watch Nike+", "Apple Watch Hermes", "Apple Watch Edition", "Apple Watch Series 1", "watchOS", "Bands", "Accessories", "Compare"],
    "TV":["Apple TV 4K", "Apple TV", "TV App", "Accessories", "Compare"],
     "Music": ["Apple Music", "iTunes", "HomePod", "iPod touch", "Music Accessories", "Gift Cards"] }


class Chosen extends React.Component {
    constructor(props){
        super(props); 
        this.state = {}
    }

    render(){
        console.log(this.props);
        const choice = navTags.find( cho => cho.toLowerCase() === this.props.match.params.id);
        console.log(choice); 
        console.log(choices[choice])
        return(
            <div> 
                {choices[choice].map((cho, i) => <div key = {i}>{cho}</div>)}
                <div>something on the page</div>
                <div>something on the page</div>
            </div>
        );
    }
}

export default Chosen; 