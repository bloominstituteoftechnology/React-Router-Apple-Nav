// Importing libraries
import React from 'react';
import { Route } from 'react-router-dom';

// Importing components
import NavBar from './components/NavBar';
import Home from './components/Home';
import SubNav from './components/SubNav';

import data from './data';

class App extends React.Component {
  render() { 
    return (
      <div className="app">
        <NavBar data={data} />
        <Route exact path='/' component={Home} />
        {
          data.map(link => <Route key={link.id} path={`/${link.name.toLowerCase()}`} render={props => (
            <SubNav {...props} link={link}/>
          )} />)
        }
      </div>
    );
  }
}
 
export default App;