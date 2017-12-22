import React, { Component } from "react";
import ChapterNav from '../ChapterNav/ChapterNav';

class IpadPro extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className='PageContents'>
          <div className='PageHeader'>THIS WILL TALK ABOUT iPad Pros HERE</div>
          <img src="https://images.apple.com/v/ipad-pro/l/images/overview/pencil_slide_1_large.jpg" />
        </div>
      </div>
    );
  }
}

export default IpadPro;