import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import SubNav from './components/SubNav'




class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Header} />
                <Route path="/subnav" component={SubNav} />
            </div>
        )
    }
}

export default App
