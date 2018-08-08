import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppleEdition from './AppleEdition';
import Hermes from './Hermes';
import NikePlus from './NikePlus';
import Series1 from './Series1';
import Series3 from './Series3';

class WatchMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchData: props.data.watch,
    }
  }

  render() {
    return (
      <div>
        <nav className="sub-nav">
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/apple-edition`}>Apple Edition</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/hermes`}>Hermes</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/nike-plus`}>Nike Plus</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/series1`}>Series 1</NavLink>
          <NavLink className="nav-item" activeClassName="selected" to={`${this.props.match.url}/series3`}>Series 3</NavLink>
        </nav>
        <Route path={`${this.props.match.url}/apple-edition`} component={AppleEdition}/>
        <Route path={`${this.props.match.url}/hermes`} component={Hermes}/>
        <Route path={`${this.props.match.url}/nike-plus`} component={NikePlus}/>
        <Route path={`${this.props.match.url}/series1`} component={Series1}/>
        <Route path={`${this.props.match.url}/series3`} component={Series3}/>
        
        {/*~~~~~~*/}
  
        <Route exact path={this.props.match.url} render={() => 
            <div>
              <h1>{this.state.watchData.info.title}</h1>
            </div>
        }/>
     </div>
    );
  }
};

export default WatchMain;