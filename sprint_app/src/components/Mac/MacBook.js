import React, { Component } from "react";
import ChapterNav from '../ChapterNav/ChapterNav';

class MacBook extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className='PageContents'>
          <div className='PageHeader'>THIS WILL TALK ABOUT MacBooks HERE</div>
          <img src="https://images.apple.com/v/macbook/g/images/overview/hero_medium.jpg" />
        </div>
      </div>
    );
  }
}

export default MacBook;