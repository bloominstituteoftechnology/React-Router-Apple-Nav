import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MainMenu extends Component {
  

  render() {
    return(
      <div>
        <ul>
         <Link to="/submenu/mac">Mac</Link>
        </ul>
      </div>
    )
  }

}

export default MainMenu;