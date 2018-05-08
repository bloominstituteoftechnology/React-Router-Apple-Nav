import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { NavWrapper, Nav, SubNav } from './components'

class App extends Component {
  constructor(props) {
    super(props);
   
}

fetchNav = id => {
<div>
<Link to={`{/${id}}`}></Link>
<Route path={this.props.path} component={SubNav}/>
</div>
console.log(this.props.path)
}
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavWrapper} />
        <Route path="/:id" component={Nav}  />
      </div>
    );
  }
}

export default App;
