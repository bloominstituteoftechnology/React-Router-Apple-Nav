import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div >
           {console.log("My Path inside Nav", this.props.path)}
          <Link to={this.props.path.toLowerCase()}>
            <div className="SubNav-item">
              <img src={this.props.src} alt=""/>
              <p>
                {this.props.name}
              </p>
            </div>
          </Link>      
      </div>
    );
  }
}
