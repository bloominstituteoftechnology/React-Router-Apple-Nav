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
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const urlLinks = {
  home: '/',
  mac: '/mac',
  iPad: '/ipad',
  iPhone: '/iphone',
  watch: '/watch',
  tv: '/tv',
  music: '/music',
  support: '/support'
};

const navItems = {
  apple: 'apple',
  mac: 'mac',
  iPad: 'ipad',
  iPhone: 'iphone',
  watch: 'watch',
  tv: 'tv',
  music: 'music',
  support: 'support'
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor() {
    super();
    this.state = {
      linkSelected: urlLinks.home,
      navItemSelected: navItems.apple,
      subNavItemSelected: ''
    };
  }

  componentDidMount() {
    // linkSelected
    if (localStorage.getItem('linkSelected')) {
      this.setState({
        linkSelected: localStorage.getItem('linkSelected')
      });
    } else {
      localStorage.setItem('linkSelected', urlLinks.home);
    }

    // navItemSelected
    if (localStorage.getItem('navItem')) {
      this.setState({
        navItemSelected: localStorage.getItem('navItem')
      });
    } else {
      localStorage.setItem('navItem', navItems.apple);
    }
  }

  selectLink = link => {
    localStorage.setItem('linkSelected', link);
    this.setState({ linkSelected: link });
  };

  selectNavItemAndLink = (link, navItem) => {
    localStorage.setItem('navItem', navItem);
    this.selectLink(link);
    this.setState({ navItemSelected: navItem });
  };

  render() {
    return (
      <DivApp>
        <NavWrapper
          {...this.state}
          urlLinks={urlLinks}
          navItems={navItems}
          selectNavItemAndLink={this.selectNavItemAndLink}
        />
        <Route exact path={urlLinks.home} component={Home} />
        <Route exact path={urlLinks.mac} component={Mac} />
        <Route exact path={urlLinks.iPad} component={IPad} />
        <Route exact path={urlLinks.iPhone} component={IPhone} />
        <Route exact path={urlLinks.watch} component={Watch} />
        <Route exact path={urlLinks.tv} component={TV} />
        <Route exact path={urlLinks.music} component={Music} />
        <Route exact path={urlLinks.support} component={Support} />
      </DivApp>
    );
  }
}

export default App;
