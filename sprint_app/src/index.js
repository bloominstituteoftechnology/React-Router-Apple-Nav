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
import Ipad from './components/Ipad/Ipad';
import IpadMini from './components/Ipad/IpadMini';
import IpadPro from './components/Ipad/IpadPro';

ReactDOM.render(
  <BrowserRouter >
    <div>
      <GlobalNav />
      <Route exact path='/' component={Home} />
      <Route path='/mac' component={Mac} />

      <Route path='/macbook' component={MacBook} />
      <Route path='/macbook-air' component={MacBook_Air} />

      <Route path='/ipad' component={Ipad} />
      <Route path='/ipad-pro' component={IpadPro} />
      <Route path='/ipad-mini' component={IpadMini} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
