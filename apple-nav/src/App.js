import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import AppleHome from './components/Apple'
import './App.css'
import Watch from './components/Watch'
import NoMatch from './components/NoMatch'
import Mac from './components/Mac'
import Ipad from './components/Ipad'
import Iphone from './components/Iphone'
import Music from './components/Music'
import Support from './components/Support'
import TV from './components/TV'
import Shop from './components/Shop'
import Search from './components/Search'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = (movie) => {
    const savedList = this.state.savedList.filter((film) => {
      return film.id !== movie.id
    })
    savedList.push(movie)
    this.setState({ savedList })
  }

  render () {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path='/' component={AppleHome} />
          <Route path='/Mac/' component={Mac} />
          <Route path='/Ipad/' component={Ipad} />
          <Route path='/Iphone/' component={Iphone} />
          <Route path='/Music/' component={Music} />
          <Route path='/Support/' component={Support} />
          <Route path='/TV/' component={TV} />
          <Route path='/Watch/' component={Watch} />
          <Route path='/Shop/' component={Shop} />
          <Route path='/Search/' component={Search} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
