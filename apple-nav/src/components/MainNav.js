import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

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
        if (!this.state.mainNav) {
            return <div>Loading data....</div>
        }
        return ( 
            <div className="nav">
                <div className="nav-links">
                    <Link to="/" ><img src="" alt="logo"/></Link>
                    {this.state.mainNav.map((link, index) => (
                        <div className="navigation-links" key={index}>
                            <Link to={`/${link.name}`} >
                            {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="nav">
                    <Route
                        
                    />
                </div>
            </div>
         );
    }
}
 
export default MainNav;