import React, {Component} from 'react';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mainNav: []
         }
    }

    componentDidMount () {
        fetch ("")
          .then(response => response.json())
          .then((data) => {
            this.setState ({
              mainNav: data
            })
          })
      }
    
    
    render() { 
        return ( 

         );
    }
}
 
export default MainNav;