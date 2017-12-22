import React, { Component } from "react";
import ChapterNav from '../ChapterNav/ChapterNav';

class Ipad extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <ChapterNav id={'ipad'} />
        <div className='PageContents'>
          <div className='PageHeader'>THIS WILL TALK ABOUT IPADS IN GENERAL </div>
          <div>iPad Pro</div>
          <div>Anything you can do,</div>
          <div>you can do better.</div>
          <img src='https://images.apple.com/v/ipad/home/ae/images/home/hero_alt1_large.jpg' />
        </div>
      </div>
    );
  }
}

export default Ipad;