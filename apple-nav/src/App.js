import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import MyComps from './components/myComps/MyComps';
import MyPhones from './components/myPhones/MyPhones';
import MyPads from './components/myPads/MyPads';
import MainContent from './components/mainContent/MainContent';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">

        <header className='header-wrapper'>
        <div className='home-btn'>
          <NavLink exact to='/'>Home</NavLink>
        </div>
          <div className="top-header">
            <NavLink to='/myComps' >myComps</NavLink>
            <NavLink to='/myPhones' >myPhones</NavLink>
            <NavLink to='/myPads' >myPads</NavLink>
          </div>
          <div className='sub-header'>
          
            <Route path='/myComps' component={MyComps} />
            <Route path='/myPhones' component={MyPhones} />
            <Route path='/myPads' component={MyPads} />
          </div>
          </header>


          <TransitionGroup>
            <CSSTransition
              key={this.props.location.pathname}
              timeout={500}
              classNames="fade"
              >
              <Switch location={this.props.location}>
              <MainContent />
              </Switch>
            </CSSTransition>
          </TransitionGroup>


          {/* <CSSTransition
            in={true}
            appear={true}
            timeout={600}
            classNames="fade"
            >
            <MainContent />
          </CSSTransition> */}


      </div>
    );
  }
}

export default withRouter(App);
