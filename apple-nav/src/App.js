import React, { Component } from "react"
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
class App extends Component {
  render() {
    return <NavWrapper menuItems={arr} />
  }
}

export default App
