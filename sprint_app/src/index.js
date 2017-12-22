import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// Router Imports Here:
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav/GlobalNav'

// Import Routed Pages Here:
import Home from './components/Home/Home';
import Mac from './components/Mac/Mac';
import MacBook from './components/Mac/MacBook';
import MacBook_Air from './components/Mac/MacBook_Air';

ReactDOM.render(
  <BrowserRouter >
    <div>
      <GlobalNav />
      <Route exact path='/' component={Home} />
      <Route path='/mac' component={Mac} />

      <Route path='/macbook' component={MacBook} />
      <Route path='/macbook-air' component={MacBook_Air} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
