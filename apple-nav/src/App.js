import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Data from './Data';
import TopNav from './components/TopNav';
import Subnav from './components/Subnav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
          <Switch location={window.location}>
            <Route exact path="/" render={props => <Subnav {...props} data={null} color={'white'} background={'white'} width={'100%'} />}/>

            <Route path="/mac" render={props => <Subnav {...props} data={Data.macData} color={'#f6f6f6'} background={'#141414'} width={'60%'} />}/>
            
            <Route path="/ipad" render={props => <Subnav {...props} data={Data.ipadData} color={'#141414'} background={'#f6f6f6'} width={'40%'}/>}/>
            
            <Route path="/iphone" render={props => <Subnav {...props} data={Data.iphoneData} color={'#f6f6f6'} background={'#141414'} width={'50%'}/>}/>
            
            <Route path="/watch" render={props => <Subnav {...props} data={Data.watchData} color={'#141414'} background={'white'} width={'50%'}/>}/>
            
            <Route path="/tv" render={props => <Subnav {...props} data={Data.tvData} color={'#f6f6f6'} background={'#141414'} width={'40%'}/>}/>
            
            <Route path="/music" render={props => <Subnav {...props} data={Data.musicData} color={'#141414'} background={'#f6f6f6'} width={'50%'}/>}/>
          </Switch>
      </div>
    );
  }
}

export default App;