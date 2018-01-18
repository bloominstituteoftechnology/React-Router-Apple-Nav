import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import Reac from './components/Reac/Reac';
import ReacBook from './components/ReacBook/ReacBook';
import ReacBookAir from './components/ReacBookAir/ReacBookAir';
import ReacBookPro from './components/ReacBookPro/ReacBookPro';

import IRact from './components/IRact/IRact';
import IRactPro from './components/IRactPro/IRactPro';

import './index.css';

ReactDOM.render(
	<Router>
		<div>
			<div className="Index">
				<Header />
				<NavBar />
			</div>

			<Switch>
				<Route exact path="/reacbook" component={ReacBook} />
				<Route exact path="/reacbook-air" component={ReacBookAir} />
				<Route exact path="/reacbook-pro" component={ReacBookPro} />
				<Route exact path="/reac" component={Reac} />
				<Route exact path="/iract/iract-pro" component={IRactPro} />
				<Route exact path="/iract" component={IRact} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>,
	document.getElementById('root')
);
