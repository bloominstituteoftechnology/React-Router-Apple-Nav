import React, { Component } from 'react';
import navData from '../appleData';


class NavWrapper extends React.Component {
	constructor(){
	super();
	this.state={
                dataList: [],
	};	

}
	

componentDidMount(){
         this.setState({ dataList: navData });

}
	
	
render() {
    return (
      <div className="nav-wrapper-container">
	    {this.state.dataList.map(item =>     
		<h1>{item.name}</h1>   
	    )} 
      </div>
    );
  }
}





export default NavWrapper;
