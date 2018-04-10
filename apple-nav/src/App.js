import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import NavWrapper from "./components/Nav"

const arr = ["mac", "ipad"]
class App extends Component {
  render() {
    return <NavWrapper menuItems={arr} />
  }
}

export default App
