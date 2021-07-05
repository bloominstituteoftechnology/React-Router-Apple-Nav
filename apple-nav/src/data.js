const data = [
  {
    id: 0,
    name: 'Home',
    sublinks: []
  },
  {
    id: 1,
    name: 'Mac',
    sublinks: [
      {
        id:0,
        name: 'MacBook',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg',
      },
      {
        id:1,
        name: 'MacBook Air',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_dark_large.svg',
      },
      {
        id:2,
        name: 'MacBook Pro',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_dark_large.svg',
      },
      {
        id:3,
        name: 'iMac',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg',
      },
      {
        id:4,
        name: 'iMac Pro',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_pro_dark_large.svg',
      },
      {
        id:5,
        name: 'Mac Pro',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_dark_large.svg',
      },
      {
        id:6,
        name: 'Mac mini',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_dark_large.svg',
      },
      {
        id:7,
        name: 'Accessories',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_dark_large.svg',
      },
      {
        id:8,
        name: 'Mojave',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_dark_large.svg',
      },
      {
        id:9,
        name: 'Compare',
        img: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_dark_large.svg',
      },
    ]
  },
  {
    id: 2,
    name: 'iPad',
    sublinks: [
      {
        id:0,
        name: 'iPad Pro',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadpro_light_large.svg',
      },
      {
        id:1,
        name: 'iPad Pro 10.5"',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_large.svg',
      },
      {
        id:2,
        name: 'iPad 9.7"',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadmini_large.svg',
      },
      {
        id:3,
        name: 'iPad mini 4',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadmini_large.svg',
      },
      {
        id:4,
        name: 'iOS 12',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_ios10_large.svg',
      },
      {
        id:5,
        name: 'Apple Pencil',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_acc_large.svg',
      },
      {
        id:6,
        name: 'Smart Keyboard',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_acc_large.svg'
      },
      {
        id:7,
        name: 'Accessories',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_acc_large.svg'
      },
      {
        id:8,
        name: 'Compare',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_comp_large.svg',
      },
    ]
  },
  {
    id: 3,
    name: 'iPhone',
    sublinks: [
      {
        id: 0,
        name: 'iPhone Xs',img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphonex_large.svg',
      },
      {
        id: 1,
        name: 'iPhone XR',
        img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphonex_large.svg',
      },
      {
        id: 2,
        name: 'iPhone 8',
        img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone8_large.svg'
      },
      {
        id: 3,
        name: 'iPhone 7',
        img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphonese_large.svg',
      },
      {
        id: 4,
        name: 'iOS 12',
        img: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_comp_large.svg',
      },
      {
        id: 5,
        name: 'AirPods',
        img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_ios_large.svg',
      },
      {
        id: 6,
        name: 'Accessories',
        img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_acc_large.svg',
      },
      {
        id: 7,
        name: 'Compare',
        img: 'https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_comp_large.svg',
      },
    ]
  },
  {
    id: 4,
    name: 'Watch',
    sublinks: [
      {
        id: 0,
        name: 'Apple Watch Series 4',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_series_2_large.svg',
      },
      {
        id: 1,
        name: 'Apple Watch Nike+',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_nike_large.svg',
      },
      {
        id: 2,
        name: 'Apple Watch Hermes',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_hermes_large.svg',
      },
      {
        id: 3,
        name: 'Apple Watch Series 3',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_series_1_large.svg'
      },
      {
        id: 4,
        name: 'watchOS',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_watch_os_large.svg'
      },
      {
        id: 5,
        name: 'Bands',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_bands_large.svg'
      },
      {
        id: 6,
        name: 'Accessories',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_accessories_large.svg'
      },
      {
        id: 7,
        name: 'Compare',
        img: 'https://www.apple.com/v/watch/home/i/images/watch_nav_compare_large.svg'
      },
    ]
  },
  {
    id: 5,
    name: 'TV',
    sublinks: [
      {
        id: 0,
        name: 'Apple TV 4K',
        img: 'https://www.apple.com/v/tv/home/d/images/home/apple_tv_dark_large.svg',
      },
      {
        id: 1,
        name: 'Apple TV',
        img: 'https://www.apple.com/v/tv/home/d/images/home/apple_tv_dark_large.svg',
      },
      {
        id: 2,
        name: 'TV App',
        img: 'https://www.apple.com/v/tv/home/d/images/home/tvapp_dark_large.svg',
      },
      {
        id: 3,
        name: 'Accessories',
        img: 'https://www.apple.com/v/tv/home/d/images/home/tvapp_dark_large.svg',
      },
      {
        id: 4,
        name: 'Compare',
        img: 'https://www.apple.com/v/tv/home/d/images/home/compare_dark_large.svg',
      },
    ]
  },
  {
    id: 6,
    name: 'Music',
    sublinks: [
      {
        id: 0,
        name: 'Apple Music',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/apple_music_large.svg',
      },
      {
        id: 1,
        name: 'iTunes',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/itunes_large.svg',
      },
      {
        id: 2,
        name: 'HomePod',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/homepod_icon_large.svg',
      },
      {
        id: 3,
        name: 'AirPods',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/homepod_icon_large.svg',
      },
      {
        id: 4,
        name: 'iPod touch',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/ipod_touch_light_large.svg',
      },
      {
        id: 5,
        name: 'Music Accessories',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/accessories_large.svg',
      },
      {
        id: 6,
        name: 'Gift Cards',
        img: 'https://www.apple.com/v/music/g/images/overview/icons/gift_cards_large.svg'
      },
    ]
  },
  {
    id: 7,
    name: 'Support',
    sublinks: []
  },
  {
    id: 8,
    name: 'Search',
    sublinks: []
  },
  {
    id: 9,
    name: 'Shop',
    sublinks: []
  },
]

export default data;