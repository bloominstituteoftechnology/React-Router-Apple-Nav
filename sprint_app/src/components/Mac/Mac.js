import React, { Component } from "react";
import ChapterNav from '../ChapterNav/ChapterNav';

class Mac extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <ChapterNav id={'mac'} />
        <div className='PageContents'>
          <div className='PageHeader'>THIS WILL TALK ABOUT MACS IN GENERAL </div>
          <div>iMac Pro</div>
          <div>Power to the pro.</div>
          <img src='https://images.apple.com/v/mac/home/y/images/home/imac_pro_medium.jpg' />
        </div>
      </div>
    );
  }
}

export default Mac;