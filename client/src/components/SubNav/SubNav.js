import React from 'react';
import './SubNav.css';
import { NavLink } from 'react-router-dom';
import mockData from '../../NavData';
import SubNavItem from '../SubNavItem/SubNavItem';
class SubNav extends React.Component {

  componentDidMount() {
    
  }

  render() {
    console.log(this.props.location);
    const currentRoute = this.props.location.pathname.split('/')[1];
    return (
      <div className="subNav">
        {mockData[currentRoute].map((item, i) => {
          return (<SubNavItem itemName={item} itemRoute={`/${currentRoute}/${item}`} key={`sni${i}`} />);
        })}
      </div>
    );
  }
}

export default SubNav;
