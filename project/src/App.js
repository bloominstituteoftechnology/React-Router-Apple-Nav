import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, Mac, iPad, iPhone, Watch, Test, Test2, Test3, Test4 } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={ Home }/>
    <Route path="/mac" component={ Mac }/>
    <Route path="/ipad" component={ iPad }/>
    <Route path="/iphone" component={ iPhone }/>
    <Route path="/watch" component={ Watch }/>
    <Route path="/mac/test" component={ Test }/>
    <Route path="/mac/test2" component={ Test2 }/>
    <Route path="/mac/test3" component={ Test3 }/>
    <Route path="/mac/test4" component={ Test4 }/>
  </div>
);
export default App;