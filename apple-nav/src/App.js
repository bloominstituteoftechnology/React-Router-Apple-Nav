import React, { Component } from "react"
import { Route } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import NavWrapper from "./components/Nav"

const arr = [
  "🍎",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "TV",
  "Music",
  "Support",
  "🔍"
]

const dictionary = {}
arr.map(val => Object.assign(dictionary, { [val]: "" }))
dictionary["Mac"] = [
  "MacBook",
  "MacBook Air",
  "MacBook Pro",
  "iMac",
  "iMac Pro",
  "Mac Pro",
  "Mac mini",
  "Accessories",
  "High Sierra",
  "Compare"
]
class App extends Component {
  render() {
    return (
      <div>
        <NavWrapper menuItems={arr} />
        {arr.map(location => (
          <Route
            exact
            path={`/${location}`}
            render={() => <NavWrapper menuItems={dictionary[location]} />}
          />
        ))}
      </div>
    )
  }
}

export default App
