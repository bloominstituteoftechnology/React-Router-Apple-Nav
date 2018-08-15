import React, { Component } from 'react';
import {Link} from '../../../node_modules/react-router-dom';


class Nav extends Component {
    render() {
      return (
        <ul>
          <Link to {`/links/${link.id}`}>{this.props.list}</Link>
        </ul>
      )
    }
  }

  export default Nav; 