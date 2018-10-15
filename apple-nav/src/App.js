import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import NavContainer from './components/NavContainer'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={NavContainer} />
            </div>
        )
    }
}

export default App
