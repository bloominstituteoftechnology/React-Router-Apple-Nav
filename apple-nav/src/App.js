import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import NavWrapper from './components/Nav'
import Dictionary, { SubMenus as arr } from './Dictionary'

class App extends Component {
  render () {
    return (
      <div>
        <NavWrapper menuItems={arr} />
        {arr.map(location => (
          <Route
            exact
            path={`/${location}`}
            render={() => (
              <NavWrapper isSub='true' menuItems={Dictionary[location]} />
            )}
          />
        ))}
      </div>
    )
  }
}

export default App
