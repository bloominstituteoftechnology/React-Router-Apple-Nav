import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/mac" component={Home}></Route>
            <Route path="/ipad" component={Home}></Route>
            <Route path="/iphone" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;