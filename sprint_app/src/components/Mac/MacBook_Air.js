import React, { Component } from "react";
import ChapterNav from '../ChapterNav/ChapterNav';

class MacBook_Air extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className='PageContents'>
          <div className='PageHeader'>THIS WILL TALK ABOUT MacBook Air HERE</div>
          <img src="https://images.apple.com/macbook-air/overview/hero/image_large.jpg" />
        </div>
      </div>
    );
  }
}

export default MacBook_Air;