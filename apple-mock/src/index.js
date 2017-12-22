import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers/';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<Router>
  <Route exact path='/' component={App} />
  </Router>
</Provider>
, document.getElementById('root'));

