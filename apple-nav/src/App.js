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
    const keys = Object.keys(data)

    return (
      <Fragment>
        <Nav links={keys} />
        {keys.map((key, i) => <SubNav key={i} links={data[key]} />)}
      </Fragment>
    )
  }
}

export default App
