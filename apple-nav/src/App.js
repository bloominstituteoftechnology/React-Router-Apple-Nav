import React, { Component } from 'react';
import './App.css';
import MainNav from './components/mainNav';
import SubMenu from './components/subMenu';
import { Link, NavLink, Route } from 'react-router-dom';

import dumData from './dummyData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appleData: [],
    }

  }

  componentDidMount() {
    this.setState({
      appleData: dumData
    });
  }

  render() {

    return (
      <div>
        <header>

          <nav>
            <Link to='/'>
              <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt='apple'/>
            </Link>
            {this.state.appleData.map(data => (
              <MainNav link={data} key={data.name} />
            ))}
            <NavLink exact to='/support' className='mainLinks'>Support</NavLink>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt='search'/>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt='bag'/>
          </nav>

          <div className='subheader'>
            <div className='subMenu'>
                <Route path={`/:id`} render={props => <SubMenu {...props} sub={this.state.appleData}/>} />
            </div>
          </div>
          

        </header>
      </div>
    );
  }
}

export default App;
