import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import MacBook from './MacBook';
import MacBookAir from './MacBookAir';
import MacBookPro from './MacBookPro';
import iMac from './iMac';
import iMacPro from './iMacPro';
import MacPro from './MacPro';
import MacMini from './MacMini';

class MacMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macData: props.data.mac,
    }
  }
  
  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/macbook`}>MacBook</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/macbook-air`}>MacBook Air</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/macbook-pro`}>MacBook Pro</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/imac`}>iMac</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/imac-pro`}>iMac Pro</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/mac-pro`}>Mac Pro</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/mac-mini`}>Mac Mini</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/macbook`} component={MacBook}/>
        <Route path={`${this.props.match.url}/macbook-air`} component={MacBookAir}/>
        <Route path={`${this.props.match.url}/macbook-pro`} component={MacBookPro}/>
        <Route path={`${this.props.match.url}/imac`} component={iMac}/>
        <Route path={`${this.props.match.url}/imac-pro`} component={iMacPro}/>
        <Route path={`${this.props.match.url}/mac-pro`} component={MacPro}/>
        <Route path={`${this.props.match.url}/mac-mini`} component={MacMini}/>
        
        {/*~~~~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.macData.info.someInfo}</h1>
            </div>
        }/>
     </div>
    );  
  }
};

export default MacMain;