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
        <div className="navbar-wrapper">
          <NavBar data={data} />
        </div>
        <div className="subnav-wrapper">
          <Route exact path='/' component={Home} />
          {
            data.map(link => <Route key={link.id} path={`/${link.name.toLowerCase()}`} render={props => (
              <SubNav {...props} link={link}/>
            )} />)
          }
        </div>
        <div className="giftcard-wrapper">
          Get a $50 Apple Store Gift Card when you buy Apple Watch Series 3 today. <span>Shop ></span>
        </div>
      </div>
    );
  }
}
 
export default App;