import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import data from '../../data'
import AppleMusic from './AppleMusic';
import HomePod from './HomePod';
import iPodTouch from './iPodTouch';
import iTunes from './iTunes';

class MusicMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macData: {}
    }
  }

  componentDidMount() {
    this.setState({macData: data.music})
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/apple-music`}>Apple Music</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/home-pod`}>Home Pod</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/ipod-touch`}>iPod Touch</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/itunes`}>iTunes</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/apple-music`} component={AppleMusic}/>
        <Route path={`${this.props.match.url}/home-pod`} component={HomePod}/>
        <Route path={`${this.props.match.url}/ipod-touch`} component={iPodTouch}/>
        <Route path={`${this.props.match.url}/itunes`} component={iTunes}/>
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>MUSIC MAINNNNNNNN</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default MusicMain;