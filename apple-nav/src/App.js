import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './Nav/NavWrapper';
import Home from './Pages/Home';
import Mac from './Pages/Mac';
import IPad from './Pages/IPad';
import IPhone from './Pages/IPhone';
import Watch from './Pages/Watch';
import TV from './Pages/TV';
import Music from './Pages/Music';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<NavWrapper />
				<Route exact path="/" component={Home} />
				<Route path="/mac" component={Mac} />
				<Route path="/ipad" component={IPad} />
				<Route path="/iphone" component={IPhone} />
				<Route path="/watch" component={Watch} />
				<Route path="/tv" component={TV} />
				<Route path="/music" component={Music} />
			</div>
		);
	}
}

export default App;
