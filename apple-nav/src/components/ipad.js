import React, { Component } from 'react';
import { Header, Anchor } from "./style";


class Ipad extends Component {
  constructor(props){
    super(props);
    this.keyCount = 0;
  }

  getKey = () =>{
    return this.keyCount++;
  }

  render() {
    console.log(this.props.ipadLists) 
    return ( 
      <Header>
      {this.props.ipadLists.map(item =>{
         return <Anchor key={this.getKey()}>{item}</Anchor>
      })}
      </Header>
    );
  }
}

export default Ipad;