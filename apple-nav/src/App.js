import React, { Component } from 'react';
import NavWrapper from './component/NavWrapper';
import SubNav from './component/SubNav';

const NavList = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support']

class App extends Component {
  constructor() {
    super()
    this.state = {
      product: 'Mac'
    }
  }
  handleClick = (product) => {
    this.setState({
      product
    })
  }
  render() {
    return (
      <div>
        <NavWrapper navs={NavList} handleClick={this.handleClick}/>
        <SubNav />
      </div>
    );
  }
}

export default App;
