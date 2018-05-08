import React, { Component } from 'react';
import NavWrapper from './component/NavWrapper';
import SubNav from './component/SubNav';

import { Route } from 'react-router-dom';

const NavList = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Route path='/' 
          render={props => 
            <NavWrapper {...props} categories={NavList}
            />
          }
        />
        <Route path='/:category' component={SubNav}/>
      </div>
    );
  }
}

export default App;
