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
import IReac from './components/IReac/IReac';
import IReacPro from './components/IReacPro/IReacPro';
import ReacPro from './components/ReacPro/ReacPro';
import ReacMini from './components/ReacMini/ReacMini';

import IRT11 from './components/IRT11/IRT11'

import IRact from './components/IRact/IRact';
import IRactPro from './components/IRactPro/IRactPro';
import IRact_1 from './components/IRact_1/IRact_1';

import IReact from './components/IReact/IReact';
import IReactX from './components/IReactX/IReactX';

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
				<Route exact path="/ireac" component={IReac} />
				<Route exact path="/ireac-pro" component={IReacPro} />
				<Route exact path="/reac-pro" component={ReacPro} />
				<Route exact path="/reac-mini" component={ReacMini} />
				<Route exact path="/reac" component={Reac} />

				<Route exact path="/irt/irt-11" component={IRT11} />

				<Route exact path="/iract-pro" component={IRactPro} />
				<Route exact path="/iract-1.0" component={IRact_1} />
				<Route exact path="/iract" component={IRact} />
				
				<Route exact path="/ireact-x" component={IReactX} />
				<Route exact path="/ireact" component={IReact} />

				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>,
	document.getElementById('root')
);
