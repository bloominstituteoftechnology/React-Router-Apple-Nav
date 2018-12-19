import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import SubNav from './SubNav';
import Content from './Content';

class App extends React.Component {
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
