import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import IPhoneX from './IPhoneX';
import IPhone8 from './IPhone8';
import IPhone7 from './IPhone7';
import IPhone6s from './IPhone6s';
import IPhoneSE from './IPhoneSE';

class IPhoneMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iphoneData: props.data.iphone,
    }
  }

  render() {
    return (
      <div>
        <nav className="sub-nav">
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/iphone-x`}>iPhone X</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/iphone-8`}>iPhone 8</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/iphone-7`}>iPhone 7</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/iphone-6s`}>iPhone 6s</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/iphone-se`}>iPhone SE</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/iphone-x`} render={props => <IPhoneX {...props} data={this.state.iphoneData.subCategories.iphoneX} />} />
        <Route path={`${this.props.match.url}/iphone-8`} render={props => <IPhone8 {...props} data={this.state.iphoneData.subCategories.iphone8} />} />
        <Route path={`${this.props.match.url}/iphone-7`} render={props => <IPhone7 {...props} data={this.state.iphoneData.subCategories.iphone7} />} />
        <Route path={`${this.props.match.url}/iphone-6s`} render={props => <IPhone6s {...props} data={this.state.iphoneData.subCategories.iphone6s} />} />
        <Route path={`${this.props.match.url}/iphone-se`} render={props => <IPhoneSE {...props} data={this.state.iphoneData.subCategories.iphoneSE} />} />
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.iphoneData.info.title}</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default IPhoneMain;