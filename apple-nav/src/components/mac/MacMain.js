import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import MacBook from './MacBook';
import MacBookAir from './MacBookAir';
import MacBookPro from './MacBookPro';
import IMac from './IMac';
import IMacPro from './IMacPro';
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
        <nav className="sub-nav">
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/macbook`}>MacBook</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/macbook-air`}>MacBook Air</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/macbook-pro`}>MacBook Pro</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/imac`}>iMac</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/imac-pro`}>iMac Pro</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/mac-pro`}>Mac Pro</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/mac-mini`}>Mac Mini</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/macbook`} render={props => <MacBook {...props} data={this.state.macData.subCategories.macBook} />} />
        <Route path={`${this.props.match.url}/macbook-air`} render={props => <MacBookAir {...props} data={this.state.macData.subCategories.macBookAir} />} />
        <Route path={`${this.props.match.url}/macbook-pro`} render={props => <MacBookPro {...props} data={this.state.macData.subCategories.macBookPro} />} />
        <Route path={`${this.props.match.url}/imac`} render={props => <IMac {...props} data={this.state.macData.subCategories.imac} />} />
        <Route path={`${this.props.match.url}/imac-pro`} render={props => <IMacPro {...props} data={this.state.macData.subCategories.imacPro} />} />
        <Route path={`${this.props.match.url}/mac-pro`} render={props => <MacPro {...props} data={this.state.macData.subCategories.macPro} />} />
        <Route path={`${this.props.match.url}/mac-mini`} render={props => <MacMini {...props} data={this.state.macData.subCategories.macMini} />} />
        
        {/*~~~~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.macData.info.title}</h1>
            </div>
        }/>
     </div>
    );  
  }
};

export default MacMain;