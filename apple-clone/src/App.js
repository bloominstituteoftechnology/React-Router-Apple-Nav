import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { data, appleImgs} from './apple-data';
import ChapterNav from './components/ChapterNav';
class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      imgs : []
    }
   
  }
  componentDidMount = () => {
    this.setState({
      products: data,
      imgs: appleImgs
    })

  }
  render() {
    return (
      <div className="App">
        <Nav data={this.state.products}/>
        <ChapterNav  imgs={this.state.imgs} />
      </div>
    );
  }
}

export default App;
