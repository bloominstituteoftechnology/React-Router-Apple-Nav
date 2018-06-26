import React from 'react';
import Navigation from './Navigation';
import navData from '../Nav-data';

class NavWrapper extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
      navlinks: []
    }
    }
  
    componentDidMount() {
      this.setState({navlinks: navData});
    }

    render() {
      return (
        <div>
          {this.state.navlinks.map(item => {
              return <div><Navigation links={item.links} />{item.name}</div>
          })}
        </div>
      );
    }
  }

export default NavWrapper