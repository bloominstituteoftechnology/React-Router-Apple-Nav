import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
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
        {keys.map((key, i) => (
          <Route
            key={i}
            path={`/${key.toLowerCase()}`}
            render={props => (
              <SubNav {...props} links={data[key]} odd={i % 2 === 0} />
            )}
          />
        ))}
      </Fragment>
    )
  }
}

export default App
