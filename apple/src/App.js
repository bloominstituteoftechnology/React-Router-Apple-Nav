import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Mac from './components/Mac/Mac';
import IPhone from './components/iPhone/iPhone';
import IPad from './components/iPad/iPad';
import IPod from './components/iPod/iPod';
import Watch from './components/Watch/Watch';
import TV from './components/TV/TV';
import Music from './components/Music/Music';
import Support from './components/Support/Support';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route 
          path="/" 
          exact
          render={(props) => (
            <Mac {...props} select={this.select} />
          )} />
        <Route 
          path="/Mac" 
          exact
          render={(props) => (
            <Mac {...props} select={this.select} />
          )} />
        <Route 
          path="/iPhone" 
          exact
          render={(props) => (
            <IPhone {...props} select={this.select} />
          )} />
        <Route 
          path="/iPad" 
          exact
          render={(props) => (
            <IPad {...props} select={this.select} />
          )} />
        <Route 
          path="/iPod" 
          exact
          render={(props) => (
            <IPod {...props} select={this.select} />
          )} />
        <Route 
          path="/Watch" 
          exact
          render={(props) => (
            <Watch {...props} select={this.select} />
          )} />
        <Route 
          path="/TV" 
          exact
          render={(props) => (
            <TV {...props} select={this.select} />
          )} />
        <Route 
          path="/Music" 
          exact
          render={(props) => (
            <Music {...props} select={this.select} />
          )} />
        <Route 
          path="/Support" 
          exact
          render={(props) => (
            <Support {...props} select={this.select} />
          )} />
      </div>
    );
  }
}
