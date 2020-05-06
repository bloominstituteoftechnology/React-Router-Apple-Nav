import React, { Component } from 'react';
import data from '../../data';
import './SubNav.css'

class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const getCategory = (path) => {
      return path.split('').splice(1).join('');
    }
    const word = getCategory(this.props.match.url);
    this.setState({
      items: data[word].products,
    })
  }

  render() {
    return(
      <ul>
        {this.state.items.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    )
  }
}

export default SubNav;
