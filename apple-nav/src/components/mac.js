import React, { Component } from 'react';
import {Header , Anchor} from './style';


class Mac extends Component {
  constructor(props){
    super(props);
    this.keyCount = 0;
  }

  getKey = () =>{
    return this.keyCount++;
  }

  render() { 
    console.log(this.props.macLists)
    return (  
      <Header>
      {this.props.macLists.map(item => {
        return <Anchor key={this.getKey()}>{item}</Anchor>
      })}
      </Header>
    );
  }
}

export default Mac;