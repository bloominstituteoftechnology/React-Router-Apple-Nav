import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import NavWrapper from './Components/NavWrapper';
import SubNav from './Components/SubNav';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavWrapper />
        <Route exact path="/" component={Home} />
				<Route exact path="/:product" component={SubNav} />
			</div>
		);
	}
}

export default App;
