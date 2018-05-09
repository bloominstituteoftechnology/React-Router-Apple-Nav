import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Home, Mac, iPad, iPhone, Watch, TV, Music, Support, Search, Shop, MacSubItem } from './components';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container  className="App">
        {/* <Row>
          <Col><h1 className="App-title">Welcome to React</h1></Col>
        </Row> */}
        <Row className="navBar fixed-top navbar-trans">
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col><Link to='/'>Home</Link></Col>
          <Col><Link to='/Mac'>Mac</Link></Col>
          <Col><Link to='/ipad'>iPad</Link></Col>
          <Col><Link to='/iphone'>iPhone</Link></Col>
          <Col><Link to='/watch'>Watch</Link></Col>
          <Col><Link to='/tv'>TV</Link></Col>
          <Col><Link to='/music'>Music</Link></Col>
          <Col><Link to='/support'>Support</Link></Col>
          <Col><Link to='/search'>Search</Link></Col>
          <Col><Link to='/shop'>Shop</Link></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <br /><br />< br/>

        <Route exact path='/' component={Home}></Route>
        <Route path='/mac/' component={Mac}></Route>
        <Route path='/mac/:macSubMenu' component={MacSubItem}></Route>
        <Route path='/ipad' component={iPad}></Route>
        <Route path='/iphone' component={iPhone}></Route>
        <Route path='/watch' component={Watch}></Route>
        <Route path='/tv' component={TV}></Route>
        <Route path='/music' component={Music}></Route>
        <Route path='/support' component={Support}></Route>
        <Route path='/search' component={Search}></Route>
        <Route path='/shop' component={Shop}></Route>
       
      </Container>
    );
  }
}

export default App;
