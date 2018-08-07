import React, { Component } from 'react';
import './home.css'

export default class Home extends Component {


render(){
  return(
    <div className="home">
        <p><h1>iPhone X</h1></p>
        <p><h4>Say hello to the future</h4></p> 
        <img src="C:\Documents\Code\React-Router-Apple-Nav\apple-nav\src\images\iphonex.jpg" alt="iphone pic"/>
        {console.log('what am i missing?')}
    </div>
  );
}
};


