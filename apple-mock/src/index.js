import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import MainMenu from './components/MainMenu';
import SubMenu from './components/SubMenu';

import reducers from './reducers/';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<Router>
  <Route exact path='/' component={App} />
  <Route exact path='/menu' component={MainMenu} />
  <Route exact path='/menu/:name' component={SubMenu} />
  </Router>
</Provider>
, document.getElementById('root'));

