import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Link} from "react-router-dom";
import Nav from "./components/Nav";
import NavList from "./components/NavList";


const Navlist=[

  {
    heading: "Mac",
    subheading: ["MacBook","MacBookAir","MacBookPro"]
  },

  {
    heading: "iPad",
    subheading: ["iPadPro","iPadPro 10.5","iPad9.7"]
  },

  {
    heading: "iPhone",
    subheading: ["iPhonexs","iPhonexr","iPhone8"]
  }
]

class App extends Component {
  constructor(){
    super();


  }

  render() {
    return (
        <div>
        <div className="App-header">
          {
            Navlist.map(nav => {
                  return <Link to={nav.heading}> {nav.heading} </Link>
                }
            )
          }

        </div>


          <div >

             <Route path="/:id" render={(props)=><NavList {...props} list={Navlist}/>}/>


          </div>
        </div>
    );
  }
}

export default App;
