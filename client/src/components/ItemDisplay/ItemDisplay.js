import React from 'react';
import './ItemDisplay.css';
import { NavLink } from 'react-router-dom';
import mockData from '../../NavData';

class ItemDisplay extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const item = this.props.match.params.item;
    return (
      <div className="itemDisplay">
        Here is some information about {item}
      </div>
    );
  }
}

export default ItemDisplay;
