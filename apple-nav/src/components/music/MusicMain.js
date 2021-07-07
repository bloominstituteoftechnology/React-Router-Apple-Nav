import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleMusic from './AppleMusic';
import HomePod from './HomePod';
import IPodTouch from './IPodTouch';
import ITunes from './ITunes';

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
        <Route path={`${this.props.match.url}/apple-music`} render={props => <AppleMusic {...props} data={this.state.musicData.subCategories.appleMusic} />} />
        <Route path={`${this.props.match.url}/home-pod`} render={props => <HomePod {...props} data={this.state.musicData.subCategories.homePod} />} />
        <Route path={`${this.props.match.url}/ipod-touch`} render={props => <IPodTouch {...props} data={this.state.musicData.subCategories.ipodTouch} />} />
        <Route path={`${this.props.match.url}/itunes`} render={props => <ITunes {...props} data={this.state.musicData.subCategories.itunes} />} />
        
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