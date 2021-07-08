import React, { Component } from 'react';
import appleData from './appleData';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import styled from 'styled-components';
import ProductPage from './components/ProductPage';
import { Route } from 'react-router-dom';


const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  state = {
    links: [],
  };

  componentDidMount() {
    let links = JSON.parse(JSON.stringify(appleData));
    this.setState({
      links: links,
    });
  }
  
  render() {
    return (
      <AppWrapper>
        <Header links={this.state.links} />
        <Route path="/:product"
        render={(props) => 
        this.state.links.some(link => link.name === props.match.params.product)
        ? <SubHeader {...props} links={this.state.links}/>
        : <ProductPage {...props} links={this.state.links}/>
      }
        />
       

       
      

      
      </AppWrapper>
    );
  }
}

export default App;
