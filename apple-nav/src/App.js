import React, { Component } from 'react';
import Data from './data';
import styled, {createGlobalStyle} from '../node_modules/styled-components';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}
body{
  box-sizing: border-box;
  background: white;
  margin: 0;
  }
`
const AppContainer = styled.div`
width: 100%;
`



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: []
    }
  }

  componentDidMount(){
    this.setState({
      data: Data
    })
  }
  render() {
    return (
    <React.Fragment>
      <GlobalStyle />
        <AppContainer>
          <NavBar list={this.state.data} />
        </AppContainer>
   </React.Fragment>  
    );
  }
}

export default App;

App.propTypes ={
  data: PropTypes.array
}