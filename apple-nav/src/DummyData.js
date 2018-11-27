import React from "react";

const DummyData = [
  {
    name: "Mac",
    subLinks: [
      {
        name: "MacBook",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg"
      },
      {
        name: "MacBook Air",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_dark_large.svg"
      },
      {
        name: "MacBook Pro",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_dark_large.svg"
      },
      {
        name: "iMac",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg"
      },
      {
        name: "iMac Pro",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_pro_dark_large.svg"
      },
      {
        name: "Mac Pro",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_dark_large.svg"
      },
      {
        name: "Mac mini",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_dark_large.svg"
      },
      {
        name: "Accessories",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_dark_large.svg"
      },
      {
        name: "High Sierra",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_dark_large.svg"
      },
      {
        name: "compare",
        img:
          "https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_dark_large.svg"
      }
    ]
  },
  {
    name: "iPad",
    subLinks: [
      {
        name: "iPad Pro",
        img:
          "https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadpro_light_large.svg"
      },
      {
        name: "iPad",
        img:
          "https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_large.svg"
      },
      {
        name: "iPad mini 4",
        img:
          "https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadmini_large.svg"
      },
      {
        name: "iOS 11",
        img:
          "https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_ios10_large.svg"
      },
      {
        name: "Accessories",
        img:
          "https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_acc_large.svg"
      },
      {
        name: "compare",
        img:
          "https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_comp_large.svg"
      }
    ]
  },
  {
    name: "iPhone",
    subLinks: [
      {
        name: "iPhone X",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphonex_large.svg"
      },
      {
        name: "iPhone 8",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphone8_large.svg"
      },
      {
        name: "iPhone 7",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphone7_large.svg"
      },
      {
        name: "iPhone 6s",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphone6s_large.svg"
      },
      {
        name: "iPhone SE",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphonese_large.svg"
      },
      {
        name: "iOS 11",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_ios_large.svg"
      },
      {
        name: "Accessories",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_acc_large.svg"
      },
      {
        name: "Compare",
        img:
          "https://www.apple.com/v/iphone/home/x/images/chapternav/iphone_comp_large.svg"
      }
    ]
  },
  {
    name: "Watch",
    subLinks: [
      {
        name: "Apple Watch Series 3",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_series_2_large.svg"
      },
      {
        name: "Apple Watch Nike+",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_nike_large.svg"
      },
      {
        name: "Apple Watch Hermès",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_hermes_large.svg"
      },
      {
        name: "Apple Watch Edition",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_edition_large.svg"
      },
      {
        name: "Apple Watch Series 1",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_series_1_large.svg"
      },
      {
        name: "watchOS",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_watch_os_large.svg"
      },
      {
        name: "Bands",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_bands_large.svg"
      },
      {
        name: "Accessories",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_accessories_large.svg"
      },
      {
        name: "Compare",
        img:
          "https://www.apple.com/v/watch/home/i/images/watch_nav_compare_large.svg"
      }
    ]
  },
  {
    name: "TV",
    subLinks: [
      {
        name: "Apple TV 4K",
        img:
          "https://www.apple.com/v/tv/home/d/images/home/apple_tv_dark_large.svg"
      },
      {
        name: "Apple TV",
        img:
          "https://www.apple.com/v/tv/home/d/images/home/apple_tv_dark_large.svg"
      },
      {
        name: "TV App",
        img:
          "https://www.apple.com/v/tv/home/d/images/home/tvapp_dark_large.svg"
      },
      {
        name: "Accessories",
        img:
          "https://www.apple.com/v/tv/home/d/images/home/tvapp_dark_large.svg"
      },
      {
        name: "Compare",
        img:
          "https://www.apple.com/v/tv/home/d/images/home/compare_dark_large.svg"
      }
    ]
  },
  {
    name: "Music",
    subLinks: [
      {
        name: "Apple Music",
        img:
          "https://www.apple.com/v/music/g/images/overview/icons/apple_music_large.svg"
      },
      {
        name: "iTunes",
        img:
          "https://www.apple.com/v/music/g/images/overview/icons/itunes_large.svg"
      },
      {
        name: "HomePod",
        img:
          "https://www.apple.com/v/music/g/images/overview/icons/homepod_icon_large.svg"
      },
      {
        name: "iPod touch",
        img:
          "https://www.apple.com/v/music/g/images/overview/icons/ipod_touch_light_large.svg"
      },
      {
        name: "Music Accessories",
        img:
          "https://www.apple.com/v/music/g/images/overview/icons/accessories_large.svg"
      },
      {
        name: "Gift Cards",
        img:
          "https://www.apple.com/v/music/g/images/overview/icons/gift_cards_large.svg"
      }
    ]
  },

  {
    name: "header-logo",
    logos: [
      {
        name: "apple-logo",
        img:
          " https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
      },
      {
        name: "looking-glass",
        img:
          "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
      },
      {
        name: "shooping-bag",
        img:
          "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
      }
    ]
  }
];

export default DummyData;
