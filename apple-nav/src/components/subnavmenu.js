import React, {Component} from 'react';

class Subnavmenu extends Component {
    constructor(props){
      super(props)
      this.state = {
        navitem: props.navitem
  
      }
    }
    render(){
      
      return (
          <div>
              <div>{this.state.navitem.map(navitem => (<div>{navitem}</div>))}</div>
          
          </div>
  )
  }
}

export default Subnavmenu;