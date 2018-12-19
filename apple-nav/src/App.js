import React from 'react';
import { Route } from 'react-router-dom';
import data from './assets/data';
import NavBar from './NavBar';
import SubNav from './SubNav';

class App extends React.Component {
  componentDidMount(){ // Attempting to preload images into cache for quicker access when SubNav mounts.  Better way?
    data.forEach(x => new Image().src = x.img);
  }
  render() {
    return (
      <div>
        <Route path="/" render={props => <NavBar {...props} />} />
        <Route path="/:type/:device?" component={SubNav} />
      </div>

    );
  }
}

export default App;
