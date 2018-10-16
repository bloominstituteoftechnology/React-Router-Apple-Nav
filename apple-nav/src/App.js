import React, { Component, Fragment } from 'react'
import Nav from './components/Nav'
import SubNav from './components/SubNav'

import data from './data'

class App extends Component {
  state = {
    data
  }

  render() {
    const { data } = this.state

    return (
      <Fragment>
        <Nav links={Object.keys(data)} />
        <SubNav />
      </Fragment>
    )
  }
}

export default App
