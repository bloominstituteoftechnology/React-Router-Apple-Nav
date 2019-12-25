import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import './App.css'
import TopNav from './components/TopNav'
import Home from './components/Home'
import Mac from './components/Mac'
import IPad from './components/IPad'
import IPhone from './components/IPhone'
import Watch from './components/Watch'
import TV from './components/TV'
import Music from './components/Music'

const RoutesBox = posed.div({
    enter: { x: 0 },
    exit: { x: 100 }
})

class App extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <PoseGroup>
                    <RoutesBox key={Date.now()}>
                        <Switch location={window.location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/mac" component={Mac} />
                            <Route path="/ipad" component={IPad} />
                            <Route path="/iphone" component={IPhone} />
                            <Route path="/watch" component={Watch} />
                            <Route path="/tv" component={TV} />
                            <Route path="/music" component={Music} />
                        </Switch>
                    </RoutesBox>
                </PoseGroup>
            </div>
        )
    }
}

export default App
