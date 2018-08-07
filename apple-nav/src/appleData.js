const appleData = [
    { product: 'Mac', 
    childProducts: [
        {product: 'MacBook', id: 1, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'MacBook Air', id: 2, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_dark_large.svg'},
        {product: 'MacBook Pro', id: 3, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_dark_large.svg'},
        {product: 'iMac', id: 4, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg'},
        {product: 'iMac Pro', id: 5, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg'},
        {product: 'Mac Pro', id: 6, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_dark_large.svg'},
        {product: 'Mac mini', id: 7, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_dark_large.svg'},
        {product: 'Accessories', id: 8, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_dark_large.svg'},
        {product: 'High Sierra', id: 9, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_dark_large.svg'},
        {product: 'Compar', id: 10, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_dark_large.svg'},
        ]
    },
    { product: 'iPad', 
    childProducts: [
        {product: 'iPad Pro', id: 1, image: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadpro_light_large.svg'},
        {product: 'iPad', id: 2, image: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_large.svg'},
        {product: 'iPad mini 4', id: 3, image: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipadmini_large.svg'},
        {product: 'iOS 11', id: 4, image: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_ios10_large.svg'},
        {product: 'Accessories', id: 5, image: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_acc_large.svg'},
        {product: 'Compare', id: 6, image: 'https://www.apple.com/v/ipad/home/ah/images/home/familybrowser/ipad_comp_large.svg'},
        ]
    },
    { product: 'iPhone', 
    childProducts: [
        {product: 'iPhone X', id: 1, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iPhone 8', id: 2, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iPhone 7', id: 3, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iPhone 6s', id: 4, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iPhone SE', id: 5, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iOS 11', id: 6, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Accesories', id: 7, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Compare', id: 8, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        ]
    },
    { product: 'Watch', 
    childProducts: [
        {product: 'Apple Watch Series 3', id: 1, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Apple Watch Nike +', id: 2, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Apple Watch Hermes', id: 3, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Apple Watch Edition', id: 4, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Apple Watch Series 1', id: 5, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Watch OS', id: 6, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Bands', id: 7, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Accessories', id: 8, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Compare', id: 9, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        ]
    },
    { product: 'TV', 
    childProducts: [
        {product: 'Apple TV 4K', id: 1, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Apple TV', id: 2, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'TV App', id: 3, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Accessories', id: 4, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Compare', id: 5, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        ]
    },
    { product: 'Music', 
    childProducts: [
        {product: 'Apple Music', id: 1, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iTunes', id: 2, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'HomePod', id: 3, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'iPod Touch', id: 4, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Music Accessories', id: 5, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        {product: 'Gift Cards', id: 6, image: 'https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg'},
        ]
    },
]

export default appleData;