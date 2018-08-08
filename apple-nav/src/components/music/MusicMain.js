import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleMusic from './AppleMusic';
import HomePod from './HomePod';
import iPodTouch from './iPodTouch';
import iTunes from './iTunes';

class MusicMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicData: props.data.music,
    }
  }

  render() {
    return (
      <div>
        <nav className="sub-nav">
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/apple-music`}>Apple Music</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/home-pod`}>Home Pod</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/ipod-touch`}>iPod Touch</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/itunes`}>iTunes</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/apple-music`} component={AppleMusic}/>
        <Route path={`${this.props.match.url}/home-pod`} component={HomePod}/>
        <Route path={`${this.props.match.url}/ipod-touch`} component={iPodTouch}/>
        <Route path={`${this.props.match.url}/itunes`} component={iTunes}/>
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.musicData.info.title}</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default MusicMain;