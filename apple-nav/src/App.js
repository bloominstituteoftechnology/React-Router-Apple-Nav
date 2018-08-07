import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom'; 
import NavWrapper from './NavWrapper'; 
const subNav=[
  {
  id:0,
  subTabs:[
  "none"
   ]},
  {
  id:1,
  subTabs:[
    "MacBook",
    "MacBook Air",
    "MacBook Pro",
    "iMac", 
    "Mac Pro", 
    "Mac Mini", 
    "Accessories", 
    "High Sierra", 
    "Compare",
   ]},
   {
    id:2,
    subTabs:[
      "iPad Pro",
      "iPad", 
      "iPad mini 4", 
      "iOS 11", 
      "Accessories", 
      "Compare",
     ]},
     {
      id:3,
      subTabs:[
        "iPhone X",
        "iPhone 8", 
        "iPhone 7", 
        "iPhone 6s", 
        "iPhone SE", 
        "iOS 11", 
        "Accessories", 
        "Compare",
       ]},
       {
        id:4,
        subTabs:[
          "Apple Watch Series 3",
          "Apple Watch Nike +",
          "Apple Watch Hermes",
          "Apple Watch Edition", 
          "Apple Watch Series 1", 
          "watchOs", 
          "Bands", 
          "Accessories", 
          "Compare",
         ]},
         {
          id:5,
          subTabs:[
            "Apple TV 4k",
            "Apple TV",
            "TV App",
            "Accessories",  
            "Compare",
           ]},
           {
            id:6,
            subTabs:[
              "Apple Music",
              "iTunes",
              "HomePod",
              "iPod Touch", 
              "Music Accessories", 
              "Gift Cards", 
             ]},
]
class App extends Component {
  render() {
    return (
   <div>
     <NavWrapper />
     < Route/>
   </div>
    );
  }
}

export default App;
