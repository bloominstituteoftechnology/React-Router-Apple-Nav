import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleTv from './AppleTv';
import AppleTv4k from './AppleTv4k';
import TvApp from './TvApp';

class TvMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvData: props.data.tv,
    }
  }

  render() {
    return (
      <div>
        <nav className="sub-nav">
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/apple-tv`}>Apple TV</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/apple-tv-4k`}>Apple TV 4k</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/tv-app`}>TV App</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/apple-tv`} component={AppleTv}/>
        <Route path={`${this.props.match.url}/apple-tv-4k`} component={AppleTv4k}/>
        <Route path={`${this.props.match.url}/tv-app`} component={TvApp}/>
  
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.tvData.info.title}</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default TvMain;