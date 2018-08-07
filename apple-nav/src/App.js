import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';

import Nav from './Nav';
import RouterNav from './RouterNav';
import { Container } from './styles';
import data from './data';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(to right, #141E30, #243B55);
  }
`;

const StyledHeader = styled.div`
  background-color: #000;
  color: #fff;
  padding: 2rem 0;
`;

const GradientHeader = styled.div`
  padding: 3rem 0;
  background-image: linear-gradient(to right, #a1ffce, #faffd1);
  color: #111;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <StyledHeader>
            <Container>
              <Nav
                links={data.map(link => ({ href: link.name, text: link.name }))}
              />
            </Container>
          </StyledHeader>
          <Route
            path="/:name"
            render={props => (
              <GradientHeader>
                <Container>
                  <RouterNav {...props} linkCollection={data} />
                </Container>
              </GradientHeader>
            )}
          />
        </header>
      </Router>
    );
  }
}

export default App;
