import React from 'react';
import '../App.css';
import navLinks from '../data';

class SubNav extends React.Component {
  state = {
    subNav: []
  }

  componentWillMount() {
    const subNav = navLinks.find(x => x.name === this.props.match.params.name);
    this.setState({ subNav: subNav.subNav });
  }

  render() {
    return (
      <div>
        {this.state.subNav.map(item => (
          <div key={Math.random()}>{item}</div>
        ))}
      </div>
    );
  }
}

export default SubNav;
