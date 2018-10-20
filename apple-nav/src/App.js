import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Mac from './Components/Mac';
import Ipad from './Components/Ipad';
import Iphone from './Components/Iphone';
import Watch from './Components/Watch';
import TV from './Components/TV';
import Music from './Components/Music';

class App extends Component {
	render() {
	  return (
		<div className="App">
		  <Route path='/' component={Home}></Route>
		  <Route path='/mac' component={Mac}></Route>
		  <Route path='/ipad' component={Ipad}></Route>
		  <Route path='/iphone' component={Iphone}></Route>
		  <Route path='/watch' component={Watch}></Route>
		  <Route path='/tv' component={TV}></Route>
		  <Route path='/music' component={Music}></Route>
		</div>
	  );
	}
  }
  
  export default App;
