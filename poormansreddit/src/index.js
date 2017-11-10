import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import { Home, Art, ArtHot, ArtTop, ArtNew, Askme, Funny, Gaming,
    News, Pics } from './components';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <Router>
            <div>
            <h1> Poor Man's Reddit </h1>
                <Route exact path = "/" component = {App} />
                <Route path = "/news" component = {News}/>
                <Route path = "/gaming" component = {Gaming}/>
                <Route path = "/funny" component = {Funny}/>
                <Route path = "/art" component = {Art}/>
                <Route path = "/arttop" component = {ArtTop}/>
                <Route path = "/artnew" component = {ArtNew}/>
                <Route path = "/arthot" component = {ArtHot}/>
                <Route path = "/askme" component = {Askme}/>
                <Route path = "/pics" component = {Pics}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
