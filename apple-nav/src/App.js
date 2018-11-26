import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
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
  render() {
    return (
      <DivApp>
        <Route exact path='/' component={Home} />
        <Route exact path='/mac' component={Mac} />
        <Route exact path='/ipad' component={IPad} />
        <Route exact path='/iphone' component={IPhone} />
        <Route exact path='/watch' component={Watch} />
        <Route exact path='/tv' component={TV} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/support' component={Support} />
      </DivApp>
    );
  }
}

export default App;
