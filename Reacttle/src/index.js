import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Reac from './components/Reac/Reac';
import ReacBook from './components/ReacBook/ReacBook';


import './index.css';

ReactDOM.render(
	<Router>
		<div>
			<div className="Index">
				<Header />
				<NavBar />
			</div>

			<Route exact path="/" component={Home} />
			<Route path="/reac" component={Reac} />
			<Route path="/reacbook" component={ReacBook} />
		</div>
	</Router>,
	document.getElementById('root')
);
