import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import data from '../../data'
import iPhoneX from './iPhoneX';
import iPhone8 from './iPhone8';
import iPhone7 from './iPhone7';
import iPhone6s from './iPhone6s';
import iPhoneSE from './iPhoneSE';

class IPhoneMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      macData: {}
    }
  }

  componentDidMount() {
    this.setState({macData: data.iphone})
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/iphone-x`}>iPhone X</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/iphone-8`}>iPhone 8</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/iphone-7`}>iPhone 7</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/iphone-6s`}>iPhone 6s</NavLink>
          <NavLink activeClassName="selected" to={`${this.props.match.url}/iphone-se`}>iPhone SE</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/iphone-x`} component={iPhoneX}/>
        <Route path={`${this.props.match.url}/iphone-8`} component={iPhone8}/>
        <Route path={`${this.props.match.url}/iphone-7`} component={iPhone7}/>
        <Route path={`${this.props.match.url}/iphone-6s`} component={iPhone6s}/>
        <Route path={`${this.props.match.url}/iphone-se`} component={iPhoneSE}/>
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>IPHONE MAINNNNNNN</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default IPhoneMain;