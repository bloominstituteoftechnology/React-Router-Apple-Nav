import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path = '/' component = { NavWrapper } />
			</div>
		);
	}
}

export default App;
