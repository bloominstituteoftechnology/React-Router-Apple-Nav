const SubMenus = [
  '🍎',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'TV',
  'Music',
  'Support',
  '🔍'
]

const Dictionary = {}
SubMenus.map(val => Object.assign(Dictionary, { [val]: '' }))
Dictionary['Mac'] = [
  'MacBook',
  'MacBook Air',
  'MacBook Pro',
  'iMac',
  'iMac Pro',
  'Mac Pro',
  'Mac mini',
  'Accessories',
  'High Sierra',
  'Compare'
]

Dictionary['iPad'] = [
  'iPad Pro',
  'iPad',
  'iPad mini 4',
  'iOS 11',
  'Accessories',
  'Compare'
]

Dictionary['iPhone'] = [
  'iPhone X',
  'iPhone 8',
  'iPhone 7',
  'iPhone 6s',
  'iPhone SE',
  'iOS 11',
  'Accessories',
  'Compare'
]

Dictionary['Watch'] = [
  'Apple Watch Series 3',
  'Apple Watch Nike+',
  'Apple Watch Hermès',
  'Apple Watch Edition',
  'Apple Watch Series 1',
  'watchOS',
  'Bands',
  'Accessories',
  'Compare'
]

Dictionary['TV'] = [
  'Apple TV 4k',
  'Apple TV',
  'TV App',
  'Accessories',
  'Compare'
]

Dictionary['Music'] = [
  'Apple Music',
  'iTunes',
  'HomePod',
  'iPod touch',
  'Music Accessories',
  'Gift Cards'
]

export default Dictionary

export { SubMenus }
