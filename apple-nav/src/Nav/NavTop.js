import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavTop extends  React.Component {
        constructor(props){
        super(props);
		
	this.state={
		dataList: props.dataList
	
	};

}




render() {
    return (
      <div>
	    {this.state.dataList.map(item => 
	       <Link to= "/" key={Math.random()}>{item.name}</Link>
		)}	
      </div>
    );
  }
}





export default NavTop;
