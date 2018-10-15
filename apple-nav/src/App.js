import React, { Component, Fragment } from 'react'
import Nav from './components/Nav'
import SubNav from './components/SubNav'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <SubNav />
      </Fragment>
    )
  }
}

export default App
