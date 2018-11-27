// Importing libraries
import React from 'react';
import { Route } from 'react-router-dom';

// Importing components
import NavBar from './components/NavBar';
import Home from './components/Home';
import SubNav from './components/SubNav';

import data from './data';

class App extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({
      data: data,
    })
  }

  render() { 
    return (
      <div className="app">
        <div className="navbar-wrapper">
          <NavBar data={data} />
        </div>
        <div className="subnav-wrapper">
          {
            this.state.data.map(link => <Route key={link.id} path={`/${link.name.toLowerCase()}`} render={props => (
              <SubNav {...props} link={link}/>
            )} />)
          }
        </div>
        <div className="giftcard-wrapper">
          <img src="https://www.apple.com/v/ipad/home/ak/images/overview/ase/apple-gift-card__ck1hmbc30a2q_large_2x.png" alt="giftcard"/>
          <p>
            Get a $50 Apple Store Gift Card when you buy Apple Watch Series 3 today. <span>Shop ></span>
          </p>
        </div>
      </div>
    );
  }
}
 
export default App;