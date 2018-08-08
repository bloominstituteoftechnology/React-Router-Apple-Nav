import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import data from '../../data'
import iPad from './iPad';
import iPadMini4 from './iPadMini4';
import iPadPro from './iPadPro';

class IPadMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macData: {}
    }
  }

  componentDidMount() {
    this.setState({macData: data.ipad})
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/ipad`}>iPad</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/ipad-mini-4`}>iPad Mini 4</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/ipad-pro`}>iPad Pro</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/ipad`} component={iPad}/>
        <Route path={`${this.props.match.url}/ipad-mini-4`} component={iPadMini4}/>
        <Route path={`${this.props.match.url}/ipad-pro`} component={iPadPro}/>
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>IPAD MAIIINNNN</h1>
            </div>
        }/>
     </div>
    );  
  }
};

export default IPadMain;