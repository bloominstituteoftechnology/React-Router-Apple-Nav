import React, {Component} from 'react';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mainNav: []
         }
    }

    componentDidMount () {
    fetch ("https://raw.githubusercontent.com/DasGMA/React-Router-Apple-Nav/master/apple-nav/src/main_nav.json")
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