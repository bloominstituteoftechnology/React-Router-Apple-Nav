import React from 'react';
import { Transition } from 'react-transition-group';
import _ from 'lodash';

import Nav from './Nav';

class RouterNav extends React.Component {
  state = {
    in: true
  };

  componentWillReceiveProps() {
    this.setState({ in: false }, () => this.setState({ in: true }));
  }

  render() {
    const {
      linkCollection,
      match: {
        params: { name }
      }
    } = this.props;

    const tab = _.find(linkCollection, ['name', name]);
    if (!tab) return null;

    return (
      <Transition in={this.state.in} timeout={300} unmountOnExit>
        {state => {
          console.log(state);
          return (
            <Nav
              state={state}
              links={tab.subLinks.map(link => ({
                href: `${name}/${link.name}`,
                text: link.name
              }))}
            />
          );
        }}
      </Transition>
    );
  }
}

export default RouterNav;
