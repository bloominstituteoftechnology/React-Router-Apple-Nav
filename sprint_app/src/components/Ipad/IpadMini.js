import React, { Component } from "react";
import ChapterNav from '../ChapterNav/ChapterNav';

class IpadMini extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className='PageContents'>
          <div className='PageHeader'>THIS WILL TALK ABOUT iPad Mini HERE</div>
          <img src="https://images.apple.com/v/ipad-mini-4/i/images/overview/hero_large.png" />
        </div>
      </div>
    );
  }
}

export default IpadMini;