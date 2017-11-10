import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import SubNav from './components/SubNav';
import Content from './components/Content';

import './App.css';

const storage = {
  mainNav: [
    { 
      linkName: 'Watch',
      subNav: [
        {
          linkName: 'tab1',
          img: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/mac/featured-content-hero-imac-27-icon_2x.png',  
        },
        {
          linkName: 'tab2',
          img: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/family/mac-family-edu-201706?wid=965&hei=364&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1505774674011'
        },
        {
          linkName: 'tab3',
          img: 'https://pdfimages.wondershare.com/pdf-knowledge/mac-os-x-el-capitan/mac-el-capitan-upgrade-02.png'
        }
      ],
    },
    {
      linkName: 'TV',
      subNav: [
        {
          linkName: 'tab4',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlO7VHCrEpEBsIQH2vPexPzZedAxpnL-cnHBVoXBoCGn37XOqIA'
        },
        {
          linkName: 'tab5',
          img: 'https://macid.co/images/1.2/top-down-mac@2x.jpg'
        },
        {
          linkName: 'tab6',
          img: 'http://static5.uk.businessinsider.com/image/54e3c8fedd08952f318b45a2-1190-625/apples-next-macbook-air-could-come-with-a-touch-id-fingerprint-sensor-just-like-the-iphone.jpg'
        }
      ],
    },
    {
      linkName: 'Music',
      subNav: [
        {
          linkName: 'tab7',
          img: 'https://9to5mac.files.wordpress.com/2017/10/apple-imac-macbook-deals.jpg?quality=82&strip=all&w=1600'
        },
        {
          linkName: 'tab8',
          img: 'https://cnet2.cbsistatic.com/img/KnV5qDq01l6RW0nZW5_497jtitw=/830x467/2014/10/16/2262a7ad-9dd2-451a-bbb2-c0001eefd991/yosemitepromo.jpg'
        },
        {
          linkName: 'tab9',
          img: 'https://www.digicert.com/images/support-images/osx-yosemite/apple-logo.jpg'
        }
      ],
    },
    {
      linkName: 'Support',
      subNav: [
        {
          linkName: 'tab10',
          img: 'https://9to5mac.files.wordpress.com/2017/07/apple-macbook-imac-line-no-wm.jpg?quality=82&strip=all&w=1500&h=750'       
        },
        {
          linkName: 'tab11',
          img: 'http://www.mac-repair.london/wp-content/uploads/2017/04/apple-mac-repairs.jpg',
        },
        {
          linkName: 'tab12',
          img: 'https://img.movavi.com/movavi.com.12/images/mac-video-editor/v5/monitor_en.png'  
        }
      ],
    },
  ],
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      storage: []
    }
  }

  componentDidMount() {
    this.setState({ storage });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <MainNav storage={this.state.storage} /> } />
        <Route path="/mac/:subnav" render={(routeProps) => <SubNav routeProps={routeProps} storage={this.state.storage} /> } />
        <Route path="/mac/:subnav/:content" render={(routeProps) => <Content routeProps={routeProps} storage={this.state.storage} /> } />
      </div>
    );
  }
}

export default App;
