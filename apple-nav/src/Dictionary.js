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

export default Dictionary

export { SubMenus }
