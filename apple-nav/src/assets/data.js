import MacbookImg from './mac/macbook.svg';
import MacbookAirImg from './mac/macbook-air.svg';
import MacbookProImg from './mac/macbook-pro.svg';
import IMacImg from './mac/imac.svg';
import IMacProImg from './mac/imac-pro.svg';
import MacProImg from './mac/mac-pro.svg';
import MacMiniImg from './mac/mac-mini.svg';
import MacAccessoriesImg from './mac/mac-accessories.svg';
import MojaveImg from './mac/mojave.svg';
import MacCompareImg from './mac/mac-compare.svg';
import IpadProImg from './ipad/ipad-pro.svg';
import IpadPro105Img from './ipad/ipad-pro-10.5.svg';
import Ipad97Img from './ipad/ipad-9.7.svg';
import IpadMiniImg from './ipad/ipad-mini.svg';
import IOS12Img from './ipad/ios-12.svg';
import ApplePencilImg from './ipad/apple-pencil.svg'
import SmartKeyboardImg from './ipad/smart-keyboard.svg';
import IpadAccessoriesImg from './ipad/ipad-accessories.svg';
import IpadCompareImg from './ipad/ipad-compare.svg';
import IphoneXSImg from './iphone/iphone-xs.svg';
import IphoneXRImg from './iphone/iphone-xr.svg';
import Iphone8Img from './iphone/iphone-8.svg';
import Iphone7Img from './iphone/iphone-7.svg';
import IOS12LightImg from './iphone/ios-12.svg';
import AirpodsImg from './iphone/airpods.svg';
import IphoneAccessoriesImg from './iphone/iphone-accessories.svg';
import IphoneCompareImg from './iphone/iphone-compare.svg';
import WatchSeries4Img from './watch/watch-series-4.svg';
import WatchNikePlusImg from './watch/watch-nike+.svg';
import WatchHermesImg from './watch/watch-hermes.svg';
import WatchSeries3Img from './watch/watch-series-3.svg';
import WatchOSImg from './watch/watch-os.svg';
import WatchBandsImg from './watch/watch-bands.svg';
import WatchAccessoriesImg from './watch/watch-accessories.svg';
import WatchCompareImg from './watch/watch-compare.svg';
import AppleTVImg from './tv/apple-tv.svg';
import TVAppImg from './tv/tv-app.svg';
import TVAccessoriesImg from './tv/tv-accessories.svg';
import TVCompareImg from './tv/tv-compare.svg';
import AppleMusicImg from './music/apple-music.svg';
import ITunesImg from './music/itunes.svg';
import HomepodImg from './music/homepod.svg';
import AirpodsBlackImg from './music/airpods-black.svg';
import IPodTouchImg from './music/ipod-touch.svg';
import MusicAccessoriesImg from './music/music-accessories.svg';
import GiftCardsImg from './music/gift-cards.svg';

const data = [
    {
        type: 'mac',
        name: 'MacBook',
        img: MacbookImg,
        route: 'macbook',
    },
    {
        type: 'mac',
        name: 'MacBook Air',
        img: MacbookAirImg,
        route: 'macbook-air',
        new: true,
    },
    {
        type: 'mac',
        name: 'MacBook Pro',
        img: MacbookProImg,
        route: 'macbook-pro',
    },
    {
        type: 'mac',
        name: 'iMac',
        img: IMacImg,
        route: 'imac',
    },
    {
        type: 'mac',
        name: 'iMac Pro',
        img: IMacProImg,
        route: 'imac-pro',
    },
    {
        type: 'mac',
        name: 'Mac Pro',
        img: MacProImg,
        route: 'mac-pro',
    },
    {
        type: 'mac',
        name: 'Mac mini',
        img: MacMiniImg,
        route: 'mac-mini',
        new: true,
    },
    {
        type: 'mac',
        name: 'Accessories',
        img: MacAccessoriesImg,
        route: 'mac-accessories',
    },
    {
        type: 'mac',
        name: 'Mojave',
        img: MojaveImg,
        route: 'mojave',
    },
    {
        type: 'mac',
        name: 'Compare',
        img: MacCompareImg,
        route: 'mac-compare',
    },
    {
        type: 'ipad',
        name: 'iPad Pro',
        img: IpadProImg,
        route: 'ipad-pro',
        new: true,
    },
    {
        type: 'ipad',
        name: 'iPad Pro 10.5"',
        img: IpadPro105Img,
        route: 'ipad-pro-10.5',
    },
    {
        type: 'ipad',
        name: 'iPad 9.7"',
        img: Ipad97Img,
        route: 'ipad-9.7',
    },
    {
        type: 'ipad',
        name: 'iPad mini 4',
        img: IpadMiniImg,
        route: 'ipad-mini',
    },
    {
        type: 'ipad',
        name: 'iOS 12',
        img: IOS12Img,
        route: 'ios-12',
    },
    {
        type: 'ipad',
        name: 'Apple Pencil',
        img: ApplePencilImg,
        route: 'apple-pencil',
    },
    {
        type: 'ipad',
        name: 'Smart Keyboard',
        img: SmartKeyboardImg,
        route: 'smart-keyboard',
    },
    {
        type: 'ipad',
        name: 'Accessories',
        img: IpadAccessoriesImg,
        route: 'ipad-accessories',
    },
    {
        type: 'ipad',
        name: 'Compare',
        img: IpadCompareImg,
        route: 'ipad-compare',
    },
    {
        type: 'iphone',
        name: 'iPhone Xs',
        img: IphoneXSImg,
        route: 'iphone-xs',
        new: true,
    },
    {
        type: 'iphone',
        name: 'iPhone XR',
        img: IphoneXRImg,
        route: 'iphone-xr',
        new: true,
    },
    {
        type: 'iphone',
        name: 'iPhone 8',
        img: Iphone8Img,
        route: 'iphone-8',
    },
    {
        type: 'iphone',
        name: 'iPhone 7',
        img: Iphone7Img,
        route: 'iphone-7',
    },
    {
        type: 'iphone',
        name: 'iOS 12',
        img: IOS12LightImg,
        route: 'ios-12',
    },
    {
        type: 'iphone',
        name: 'AirPods',
        img: AirpodsImg,
        route: 'airpods',
    },
    {
        type: 'iphone',
        name: 'Accessories',
        img: IphoneAccessoriesImg,
        route: 'iphone-accessories',
    },
    {
        type: 'iphone',
        name: 'Compare',
        img: IphoneCompareImg,
        route: 'iphone-compare',
    },
    {
        type: 'watch',
        name: 'Apple Watch Series 4',
        img: WatchSeries4Img,
        route: 'apple-watch-series-4',
        new: true,
    },
    {
        type: 'watch',
        name: 'Apple Watch Nike+',
        img: WatchNikePlusImg,
        route: 'apple-watch-nike',
        new: true,
    },
    {
        type: 'watch',
        name: 'Apple Watch Hermès',
        img: WatchHermesImg,
        route: 'apple-watch-hermes',
        new: true,
    },
    {
        type: 'watch',
        name: 'Apple Watch Series 3',
        img: WatchSeries3Img,
        route: 'apple-watch-series-3',
    },
    {
        type: 'watch',
        name: 'watchOS',
        img: WatchOSImg,
        route: 'watch-os',
    },
    {
        type: 'watch',
        name: 'Bands',
        img: WatchBandsImg,
        route: 'apple-watch-bands',
    },
    {
        type: 'watch',
        name: 'Accessories',
        img: WatchAccessoriesImg,
        route: 'apple-watch-accessories',
    },
    {
        type: 'watch',
        name: 'Compare',
        img: WatchCompareImg,
        route: 'apple-watch-compare',
    },
    {
        type: 'tv',
        name: 'Apple TV 4K',
        img: AppleTVImg,
        route: 'apple-tv-4k',
    },
    {
        type: 'tv',
        name: 'Apple TV',
        img: AppleTVImg,
        route: 'apple-tv',
    },
    {
        type: 'tv',
        name: 'TV App',
        img: TVAppImg,
        route: 'tv-app',
    },
    {
        type: 'tv',
        name: 'Accessories',
        img: TVAccessoriesImg,
        route: 'tv-accessories',
    },
    {
        type: 'tv',
        name: 'Compare',
        img: TVCompareImg,
        route: 'tv-compare',
    },
    {
        type: 'music',
        name: 'Apple Music',
        img: AppleMusicImg,
        route: 'apple-music',
    },
    {
        type: 'music',
        name: 'iTunes',
        img: ITunesImg,
        route: 'itunes',
    },
    {
        type: 'music',
        name: 'HomePod',
        img: HomepodImg,
        route: 'homepod',
    },
    {
        type: 'music',
        name: 'AirPods',
        img: AirpodsBlackImg,
        route: 'airpods',
    },
    {
        type: 'music',
        name: 'iPod Touch',
        img: IPodTouchImg,
        route: 'ipod-touch',
    },
    {
        type: 'music',
        name: 'Music Accessories',
        img: MusicAccessoriesImg,
        route: 'music-accessories',
    },
    {
        type: 'music',
        name: 'Gift Cards',
        img: GiftCardsImg,
        route: 'gift-cards',
    },
];

export default data;