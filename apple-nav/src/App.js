// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Data
import navData from './nav-data';

// Components
import NavWrapper from './components/NavWrapper';

// Styles
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path = '/' render = { props => <NavWrapper {...props} navData = { navData } /> } />
			</div>
		);
	}
}

export default App;
