import './ChapterNav.css';
import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class ChapterNav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    this.setState({ id: this.props.id })
  }

  render() {
    switch (this.state.id) {
      case 'mac':
        return (
          <div className='ChapterNav'>
            <ul>
              <li>
                <NavLink to='/macbook' className='ChapterNav__NavLink'>MacBook</NavLink>
              </li>
              <li>
                <NavLink to='/macbook-air' className='ChapterNav__NavLink'>MacBook Air</NavLink>
              </li>
            </ul>
          </div>
        );
        break;
      default:
        return (
          <div>ERROR</div>
        );
        break;
    }
  }
}

export default ChapterNav;