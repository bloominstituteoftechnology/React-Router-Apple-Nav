import React, { Component } from 'react';
import dummyData from '../../data';
import {Link} from 'react-router-dom';
import MacCard from './MacCard'


export default class Mac extends Component {
  constructor(){
    super();
    this.state= {
      navData: dummyData
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.navData.map(data => 
          <MacCardDetails key={data.img} data={data}/>)}
      </div>
    );
  }
}


function MacCardDetails({data}){

return(
  <Link to={`/home`}>
    <MacCard data={data}/>
  </Link>
);
}

