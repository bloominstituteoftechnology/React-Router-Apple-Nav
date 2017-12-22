import React from 'react';
import './SubNavItem.css';
import mockData from '../../NavData';
import { Redirect } from 'react-router-dom';

class SubNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.displayItemRedirect = this.displayItemRedirect.bind(this);
  }

  displayItemRedirect () {
    this.setState({redirect: true});
  }

  myComponent() {
    return (
      <span onClick={this.displayItemRedirect} className="subNavItem">
        {this.props.itemName}
      </span>
    )
  }

  render() {
    if (this.state.redirect) {
      return (
        <div>
          <Redirect to={this.props.itemRoute} />
          {this.myComponent()}
        </div>
      )
    } else {
      return this.myComponent();
    }
  }
}

export default SubNavItem;
