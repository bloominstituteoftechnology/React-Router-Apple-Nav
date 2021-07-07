import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import ItemPage from './components/ItemPage';
import SubItemPage from './components/SubItemPage';
import Home from './components/Home';
import { navData } from './navData';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      links: [],
    }
  }
    componentDidMount = () => {
      this.setState({
        links: navData,
      })

    }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => (<NavWrapper {...props} links={this.state.links} />)} />
        <Route exact path='/' component={Home} />
        <Route exact path='/:name' render={(props) => (<ItemPage {...props} />)} />
        {/* <Route path=':name/:name' component={SubItemPage} /> */}
      </div>
    );
  }
}

export default App;
