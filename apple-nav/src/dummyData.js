import macBook from './Components/Images/macbook_dark_large.svg';
import macBookAir from './Components/Images/macbookair_dark_large.svg';
import macBookPro from './Components/Images/macbookpro_dark_large.svg';
import iMac from './Components/Images/imac_dark_large.svg';
import iMacPro from './Components/Images/imac_pro_dark_large.svg';
import macPro from './Components/Images/macpro_dark_large.svg';
import macMini from './Components/Images/macmini_dark_large.svg';
import macOS from './Components/Images/mac_osx_dark_large.svg';
import macComp from './Components/Images/mac_comp_dark_large.svg';
import macAcc from './Components/Images/mac_acc_dark_large.svg';

const dummyData = [
    {
        id: 0,
        name: 'Mac',
        bg: 'dark',
        sub: [
            {
                name: 'MacBook',
                img: macBook
            },
            {
                name: 'MacBook Air',
                img: macBookAir
            },
            {
                name: 'MacBook Pro',
                img: macBookPro
            },
            {
                name: 'iMac',
                img: iMac
            },
            {
                name: 'iMac Pro',
                img: iMacPro
            },
            {
                name: 'Mac Pro',
                img: macPro
            },
            {
                name: 'Mac mini',
                img: macMini
            },
            {
                name: 'Accessories',
                img: macAcc
            },
            {
                name: 'High Sierra',
                img: macOS
            },
            {
                name: 'Compare',
                img: macComp
            }
        ]
    },
    {
        id: 1,
        name: 'iPad',
        bg: 'light',
        sub: [
            {
                name: 'iPad Pro'
            },
            {
                name: 'iPad'
            },
            {
                name: 'iPad mini 4'
            },
            {
                name: 'iOS 11'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 2,
        name: 'iPhone',
        bg: 'light',
        sub: [
            {
                name: 'iPhone X'
            },
            {
                name: 'iPhone 8'
            },
            {
                name: 'iPhone 7'
            },
            {
                name: 'iPhone 6s'
            },
            {
                name: 'iPhone SE'
            },
            {
                name: 'iOS 11'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 3,
        name: 'Watch',
        bg: 'light',
        sub: [
            {
                name: 'Apple Watch Series 3'
            },
            {
                name: 'Apple Watch Nike+'
            },
            {
                name: 'Apple Watch Hermès'
            },
            {
                name: 'Apple Watch Edition'
            },
            {
                name: 'Apple Watch Series 1'
            },
            {
                name: 'watchOS'
            },
            {
                name: 'Bands'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 4,
        name: 'TV',
        bg: 'light',
        sub: [
            {
                name: 'Apple TV 4K'
            },
            {
                name: 'Apple TV'
            },
            {
                name: 'TV App'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 5,
        name: 'Music',
        bg: 'light',
        sub: [
            {
                name: 'Apply Music'
            },
            {
                name: 'iTunes'
            },
            {
                name: 'HomePod'
            },
            {
                name: 'iPod touch'
            },
            {
                name: 'Music Accessories'
            },
            {
                name: 'Gift Cards'
            }
        ]
    },
    {
        id: 6,
        name: 'Support',
        bg: 'light',
        sub: []
    }
]

export default dummyData;