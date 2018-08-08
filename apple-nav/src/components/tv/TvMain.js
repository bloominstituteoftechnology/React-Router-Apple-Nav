import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import data from '../../data'
import AppleTv from './AppleTv';
import AppleTv4k from './AppleTv4k';
import TvApp from './TvApp';

class TvMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macData: {}
    }
  }

  componentDidMount() {
    this.setState({macData: data.tv})
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/apple-tv`}>Apple TV</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/apple-tv-4k`}>Apple TV 4k</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/tv-app`}>TV App</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/apple-tv`} component={AppleTv}/>
        <Route path={`${this.props.match.url}/apple-tv-4k`} component={AppleTv4k}/>
        <Route path={`${this.props.match.url}/tv-app`} component={TvApp}/>
  
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>TVVV MAINNNNNNNN</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default TvMain;