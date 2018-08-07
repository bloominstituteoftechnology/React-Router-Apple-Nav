import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import _ from 'lodash';

import Nav from './Nav';
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
  }
`;

const StyledHeader = styled.header`
  background-color: #000;
  color: #fff;
  padding: 2rem 0;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StyledHeader>
            <Container>
              <Nav links={_.map(data, 'name')} />
            </Container>
          </StyledHeader>
        </div>
      </Router>
    );
  }
}

export default App;
