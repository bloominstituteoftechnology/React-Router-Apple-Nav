import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import posed, { PoseGroup } from 'react-pose';

import Data from './Data';
import TopNav from './components/TopNav';
import Subnav from './components/Subnav';

import './App.css';

// const RoutesContainer = posed.div({
//   enter: {x: 0},
//   exit: {x: 200}
// });

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        {/* <PoseGroup>
          <RoutesContainer key={Date.now()}> */}
            <Switch location={window.location}>
              <Route exact path="/" render={props => <div {...props}></div>}/>

              <Route path="/mac" render={props => <Subnav {...props} data={Data.macData} color={'#f6f6f6'} background={'#141414'} width={'60%'} />}/>
              
              <Route path="/ipad" render={props => <Subnav {...props} data={Data.ipadData} color={'#141414'} background={'#f6f6f6'} width={'40%'}/>}/>
              
              <Route path="/iphone" render={props => <Subnav {...props} data={Data.iphoneData} color={'#f6f6f6'} background={'#141414'} width={'50%'}/>}/>
              
              <Route path="/watch" render={props => <Subnav {...props} data={Data.watchData} color={'#141414'} background={'white'} width={'50%'}/>}/>
              
              <Route path="/tv" render={props => <Subnav {...props} data={Data.tvData} color={'#f6f6f6'} background={'#141414'} width={'40%'}/>}/>
              
              <Route path="/music" render={props => <Subnav {...props} data={Data.musicData} color={'#141414'} background={'#f6f6f6'} width={'50%'}/>}/>
            </Switch>
          {/* </RoutesContainer>
        </PoseGroup> */}
      </div>
    );
  }
}

export default App;
