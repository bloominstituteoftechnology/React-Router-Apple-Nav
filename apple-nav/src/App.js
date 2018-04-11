import React, { Component } from 'react';
import { Route  } from 'react-router-dom';

import NavWrapper from './Components/NavWrapper';
import {Mac, Macs, Ipad, Ipads, Iphone, Iphones, Watch, Watches, Tv, Tvs, Music, Musics} from './Components/SubNav';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Route exact Path ="/" component={NavWrapper}/>

        <Route exact path ="/mac" component={Macs}/>
        <Route exact path ="/:product" component={Mac}/>

        <Route exact path ="/ipad" component={Ipads}/>
        <Route exact path ="/:product" component={Ipad}/>

        <Route exact path ="/iphone" component={Iphones}/>
        <Route exact path ="/:product" component={Iphone}/>

        <Route exact path ="/watch" component={Watches}/>
        <Route exact path ="/:product" component={Watch}/>

        <Route exact path ="/tv" component={Tvs}/>
        <Route exact path ="/:product" component={Tv}/>

        <Route exact path ="/Music" component={Musics}/>
        <Route exact path ="/:product" component={Music}/>        
      
      </div>
    );
  }
}

export default App;
