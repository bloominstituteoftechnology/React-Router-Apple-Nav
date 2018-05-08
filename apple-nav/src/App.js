import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubNav from './components/SubNav';
import Home from './components/home';

const navigation = [{
  product: "Mac",
  sub: [
      {
          title: "Macbook"
      },
      {
          title: "Macbook Air"
      },
      {
          title: "Macbook Pro"
      },
      {
          title: "iMac"
      },
      {
          title: "iMac Pro"
      },
      {
          title: "Mac Mini"
      },
      {
          title: "Accessories"
      },
      {
          title: "High Sierra"
      },
      {
          title: "Compare"
      }
  ]
},
{
  product: 'iPad',
  sub: [
      { title: 'iPad Pro' },
      { title: 'iPad' },
      { title: 'iPad Mini 4' },
      { title: 'iOS 11' },
      { title: 'Accessories' },
      { title: 'Compare' }
  ]
}, 
{
  product: 'iPhone',
  sub: [
      {title: 'iPhone X'},
      {title: 'iPhone 8'},
      {title: 'iPhone 7'},
      {title: 'iPhone 6s'},
      {title: 'iPhone SE'},
      { title: 'iOS 11' },
      { title: 'Accessories' },
      { title: 'Compare' }
  ]
}];


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mac" component={Home} />
            <Route path="/ipad" component={Home} />
            <Route path="/iphone" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
