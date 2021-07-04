const dummyData = [
  {
    id: 0,
    text: 'Mac',
    content: 'This is the dummy page for the Mac product line',
    theme: {background: `#141414`, color: `#EFEFEF`},
    SubNavs: [
      {
        id: 0,
        text: 'MacBook',
        content: 'This is the dummy page for the MacBook product',
      },
      {
        id: 1,
        text: 'MacBook Air',
        content: 'This is the dummy page for the MacBook Air product',
      },
      {
        id: 2,
        text: 'MacBook Pro',
        content: 'This is the dummy page for the MacBook Pro product',
      },
      {
        id: 3,
        text: 'iMac',
        content: 'This is the dummy page for the iMac product',
      },
      {
        id: 5,
        text: 'iMac Pro',
        content: 'This is the dummy page for the iMac Pro product',
      },
      {
        id: 6,
        text: 'Mac Pro',
        content: 'This is the dummy page for the Mac Pro product',
      },
      {
        id: 7,
        text: 'Mac mini',
        content: 'This is the dummy page for the Mac mini product',
      },
      {
        id: 8,
        text: 'Accessories',
        content: 'This is the dummy page for the Mac Accessories',
      },
      {
        id: 9,
        text: 'High Sierra',
        content: 'This is the dummy page for the macOS',
      },
    ],
  },
  {
    id: 1,
    text: 'iPad',
    content: 'This is the dummy page for the iPad product line',
    theme: {background: `#F6F6F6`, color: `#333` },
    SubNavs: [
      {
        id: 0,
        text: 'iPad Pro',
        content: 'This is the dummy page for the iPad Pro product',
      },
      {
        id: 1,
        text: 'iPad',
        content: 'This is the dummy page for the iPad product',
      },
      {
        id: 2,
        text: 'iPad mini 4',
        content: 'This is the dummy page for the iPad mini 4 product',
      },
      {
        id: 3,
        text: 'iOS 11',
        content: 'This is the dummy page for iOS 11',
      },
      {
        id: 4,
        text: 'Accessories',
        content: 'This is the dummy page for the iPad Accessories',
      },
      {
        id: 5,
        text: 'Compare',
        content: 'This is the dummy page for comparing iPad devices',
      },
    ],
  },
  {
    id: 2,
    text: 'iPhone',
    content: 'This is the dummy page for the iPhone product line',
    theme: {background: `#F6F6F6`, color: `#333` },
    SubNavs: [
      {
        id: 0,
        text: 'iPhone X',
        content: 'This is the dummy page for the iPhone X product',
      },
      {
        id: 1,
        text: 'iPhone 8',
        content: 'This is the dummy page for the iPhone 8 product',
      },
      {
        id: 2,
        text: 'iPhone 7',
        content: 'This is the dummy page for the iPhone 7 product',
      },
      {
        id: 3,
        text: 'iPhone 6s',
        content: 'This is the dummy page for the iPhone 6s product',
      },
      {
        id: 4,
        text: 'iPhone SE',
        content: 'This is the dummy page for the iPhone SE product',
      },
      {
        id: 5,
        text: 'iOS 11',
        content: 'This is the dummy page for iOS 11',
      },
      {
        id: 6,
        text: 'Accessories',
        content: 'This is the dummy page for the iPhone accessories',
      },
      {
        id: 7,
        text: 'Compare',
        content: 'This is the dummy page for comparing iPhone devices',
      },
    ],
  },
  {
    id: 3,
    text: 'Watch',
    content: 'This is the dummy page for the Watch product line',
    theme: {background: `#FAFAFA`, color: `#333`},
    SubNavs: [
      {
        id: 0,
        text: 'Apple Watch Series 3',
        content: 'This is the dummy page for the Apple Watch Series 3 product',
      },
      {
        id: 1,
        text: 'Apple Watch Nike+',
        content: 'This is the dummy page for the Apple Watch Nike+ product',
      },
      {
        id: 2,
        text: 'Apple Watch Hermes',
        content: 'This is the dummy page for the Apple Watch Hermes product',
      },
      {
        id: 3,
        text: 'Apple Watch Edition',
        content: 'This is the dummy page for the Apple Watch Edition product',
      },
      {
        id: 4,
        text: 'Apple Watch Series 1',
        content: 'This is the dummy page for the Apple Watch Series 1 product',
      },
      {
        id: 5,
        text: 'watchOS',
        content: 'This is the dummy page for the watchOS software',
      },
      {
        id: 6,
        text: 'Bands',
        content: 'This is the dummy page for the watch accessories',
      },
      {
        id: 7,
        text: 'Compare',
        content: 'This is the dummy page for comparing watch devices',
      },
    ],
  },
  {
    id: 4,
    text: 'TV',
    content: 'This is the dummy page for the TV product line',
    theme: {background: `#141414`, color: `#EFEFEF`},
    SubNavs: [
      {
        id: 0,
        text: 'Apple TV 4K',
        content: 'This is the dummy page for the Apple TV 4K product',
      },
      {
        id: 1,
        text: 'Apple TV',
        content: 'This is the dummy page for the Apple TV product',
      },
      {
        id: 2,
        text: 'TV App',
        content: 'This is the dummy page for the TV App',
      },
      {
        id: 3,
        text: 'Accessories',
        content: 'This is the dummy page for the Apple TV accessories',
      },
      {
        id: 4,
        text: 'Compare',
        content: 'This is the dummy page for comparing apple tv options',
      },
    ],
  },
  {
    id: 0,
    text: 'Music',
    content: 'This is the dummy page for the Music product line',
    theme: {background: `#F6F6F6`, color: `#333`},
    SubNavs: [
      {
        id: 0,
        text: 'Apple Music',
        content: 'This is the dummy page for the Apple Music service',
      },
      {
        id: 1,
        text: 'iTunes',
        content: 'This is the dummy page for the iTunes application',
      },
      {
        id: 2,
        text: 'HomePod',
        content: 'This is the dummy page for the HomePod product',
      },
      {
        id: 3,
        text: 'iPod Touch',
        content: 'This is the dummy page for the iPod Touch product',
      },
      {
        id: 4,
        text: 'Music Accessories',
        content: 'This is the dummy page for the music accessories',
      },
      {
        id: 5,
        text: 'Gift Cards',
        content: 'This is the dummy page for Apple gift cards',
      },
    ],
  },
  {
    id: 0,
    text: 'Support',
    content: 'This is the dummy page for contacting Support',
    SubNavs: [],
  },
];

export default dummyData;
