import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import IPad from './IPad';
import IPadMini4 from './IPadMini4';
import IPadPro from './IPadPro';

class IPadMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipadData: props.data.ipad,
    }
  }

  render() {
    return (
      <div>
        <nav className="sub-nav">
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/ipad`}>iPad</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/ipad-mini-4`}>iPad Mini 4</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/ipad-pro`}>iPad Pro</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/ipad`} render={props => <IPad {...props} data={this.state.ipadData.subCategories.ipad} />} />
        <Route path={`${this.props.match.url}/ipad-mini-4`} render={props => <IPadMini4 {...props} data={this.state.ipadData.subCategories.ipadMini4} /> } />
        <Route path={`${this.props.match.url}/ipad-pro`} render={props => <IPadPro {...props} data={this.state.ipadData.subCategories.ipadPro} />} />
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.ipadData.info.title}</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default IPadMain;