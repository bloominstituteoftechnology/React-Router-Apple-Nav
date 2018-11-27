import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NavWrapper from './Components/Nav/NavWrapper';
import Home from './Components/Page/Home';
import Mac from './Components/Page/Mac';
import IPad from './Components/Page/IPad';
import IPhone from './Components/Page/IPhone';
import Watch from './Components/Page/Watch';
import TV from './Components/Page/Tv';
import Music from './Components/Page/Music';
import Support from './Components/Page/Support';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;

  * {
    box-sizing: border-box;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: '/',
      macLink: '/mac',
      iPadLink: '/ipad',
      iPhoneLink: '/iphone',
      watchLink: '/watch',
      tvLink: '/tv',
      musicLink: '/music',
      supportLink: '/support',
      linkSelected: '/'
    };
  }

  componentDidMount() {
    if (localStorage.getItem('linkSelected')) {
      this.setState({
        linkSelected: localStorage.getItem('linkSelected')
      });
    } else {
      localStorage.setItem('linkSelected', this.homeLink);
    }
  }

  selectLink = link => {
    localStorage.setItem('linkSelected', link);
  };

  render() {
    return (
      <DivApp>
        <NavWrapper {...this.state} selectLink={this.selectLink} />
        <Route exact path={this.state.homeLink} component={Home} />
        <Route exact path={this.state.macLink} component={Mac} />
        <Route exact path={this.state.iPadLink} component={IPad} />
        <Route exact path={this.state.iPhoneLink} component={IPhone} />
        <Route exact path={this.state.watchLink} component={Watch} />
        <Route exact path={this.state.tvLink} component={TV} />
        <Route exact path={this.state.musicLink} component={Music} />
        <Route exact path={this.state.supportLink} component={Support} />
      </DivApp>
    );
  }
}

export default App;
