import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

import Reac from './components/Reac/Reac';
import ReacBook from './components/ReacBook/ReacBook';
import ReacBookAir from './components/ReacBookAir/ReacBookAir';

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

			<Route exact path="/" component={Home} />
			
			<Route path="/reac" component={Reac} />
			<Route path="/reacbook" component={ReacBook} />
			<Route path="/reacbook-air" component={ReacBookAir} />

			<Route path="/iract" component={IRact} />
			<Route path="/iract-pro" component={IRactPro} />
		</div>
	</Router>,
	document.getElementById('root')
);
