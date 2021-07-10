import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import IPad from './components/IPad';
import IPhone from './components/IPhone';

ReactDOM.render(
	<Router>
		<div>
			<Navigation />
			<Route path="/" component={Home} exact/>
			<Route path="/ipad" component={IPad}/>
			<Route path="/iphone" component={IPhone}/>
		</div>
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();
